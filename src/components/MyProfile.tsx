import React, { useState, useEffect } from 'react';
import { 
  Clock,
  BookOpen,
  Target,
  Calendar,
  CheckCircle2,
  Video,
  Users,
  FileText,
  Building2,
  MessageSquare 
} from 'lucide-react';

// Configuración de API con fetch
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:1337';

// Interfaces
interface UserData {
  nombre?: string;
  apellido?: string;
  email?: string;
  id?: number;
}

interface Material {
  id: number;
  titulo: string;
  link_drive: string;
  tipo: 'tema' | 'bibliografia' | 'recurso';
}

interface Unidad {
  id: number;
  titulo: string;
  descripcion: string;
  duracion: string;
  fecha_clase?: string;
  date_raw?: string;
  link_zoom?: string;
  completada: boolean;
  completed?: boolean;
  materiales?: Material[];
}

interface Modulo {
  id: number;
  orden: number;
  titulo: string;
  descripcion: string;
  unidades: Unidad[];
  lessons?: Unidad[];
  progress: number;
  completed: boolean;
}

interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  activo: boolean;
  duracion_total?: string;
  Tutor?: string;
  ProfesionTutor?: string;
  modulos: Modulo[];
}

// Constantes estáticas
const objetivosPrograma = [
  "Desarrollar estrategias de negociación avanzadas",
  "Mejorar habilidades de comunicación ejecutiva",
  "Implementar técnicas de resolución de conflictos"
];

const CourseProfile: React.FC = () => {
  // Estados del componente
  const [userData, setUserData] = useState<UserData>({});
  const [curso, setCurso] = useState<Curso | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const [proximasClases, setProximasClases] = useState<Unidad[]>([]);
  const [totales, setTotales] = useState({
    clasesCompletadas: 0,
    clasesTotal: 0,
    duracionTotal: "0h",
    usuariosCreados: 35
  });

  useEffect(() => {
    // Verificar token de autenticación
    const token = localStorage.getItem('userToken');
    const userData = localStorage.getItem('userData');


    if (!token || !userData) {
      return;
    }

    let parsedUserData;
    try {
      parsedUserData = JSON.parse(userData);
      setUserData(parsedUserData);
    } catch (error) {
      return;
    }

    const fetchCourseData = async () => {
      try {
        setLoading(true);
        
        // Obtener cursos del usuario
        const response = await fetch(`${API_URL}/api/cursos/my-courses`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        // Leer texto de respuesta para depuración
        const responseText = await response.text();

        // Intentar parsear JSON
        let cursosData;
        try {
          cursosData = JSON.parse(responseText);
        } catch (parseError) {
          setError(`Error al parsear respuesta: ${responseText}`);
          setLoading(false);
          return;
        }

        // Manejo de diferentes escenarios de respuesta
        if (!response.ok) {
          
          if (response.status === 401 || response.status === 403) {
            // Token inválido o expirado
            localStorage.removeItem('userToken');
            localStorage.removeItem('userData');
            window.location.href = '/login';
            return;
          }

          setError(cursosData.message || 'Error al cargar los cursos');
          setLoading(false);
          return;
        }
        
        if (!cursosData || cursosData.length === 0) {
          setError('No tienes cursos asignados aún.');
          setLoading(false);
          return;
        }
        
        const cursoCompleto: Curso = cursosData[0];
        
        setCurso(cursoCompleto);
        calcularEstadisticas(cursoCompleto);
        
        setLoading(false);
      } catch (err) {
        setError(`No se pudo cargar la información del curso: ${err instanceof Error ? err.message : 'Error desconocido'}`);
        setLoading(false);
      }
    };
    
    fetchCourseData();
  }, []);
  
  const calcularEstadisticas = (curso: Curso) => {
    let clasesCompletadas = 0;
    let clasesTotal = 0;
    let duracionMinutos = 0;
    const todasLasClases: Unidad[] = [];
    
    curso.modulos.forEach(modulo => {
      const unidadesArr = modulo.lessons || modulo.unidades || [];
      
      unidadesArr.forEach((unidad: Unidad) => {
        clasesTotal++;
        todasLasClases.push(unidad);
        
        if (unidad.completed || unidad.completada) {
          clasesCompletadas++;
        }
        
        const duracionStr = unidad.duracion || "1h";
        const horasMatch = duracionStr.match(/(\d+)h/);
        const minutosMatch = duracionStr.match(/(\d+)min/);
        
        const horas = horasMatch ? parseInt(horasMatch[1]) : 0;
        const minutos = minutosMatch ? parseInt(minutosMatch[1]) : 0;
        
        duracionMinutos += (horas * 60) + minutos;
      });
    });
    
    const horas = Math.floor(duracionMinutos / 60);
    const minutosRestantes = duracionMinutos % 60;
    const duracionTotal = minutosRestantes > 0 
      ? `${horas}h ${minutosRestantes}min` 
      : `${horas}h`;
    
    setTotales({
      clasesCompletadas,
      clasesTotal,
      duracionTotal,
      usuariosCreados: 35
    });
    
    const hoy = new Date();
    const clasesNoCompletadas = todasLasClases
      .filter(unidad => !(unidad.completed || unidad.completada))
      .sort((a, b) => {
        const fechaA = a.date_raw ? a.date_raw : a.fecha_clase;
        const fechaB = b.date_raw ? b.date_raw : b.fecha_clase;
        
        if (!fechaA || !fechaB) return 0;
        return new Date(fechaA).getTime() - new Date(fechaB).getTime();
      });
    
    setProximasClases(clasesNoCompletadas.slice(0, 4));
  };

  const getUserFullName = () => {
    if (userData.nombre && userData.apellido) {
      return `${userData.nombre} ${userData.apellido}`;
    } else if (userData.nombre) {
      return userData.nombre;
    } else if (userData.email) {
      return userData.email.split('@')[0];
    } else {
      return "Usuario";
    }
  };

  const getUserEmail = () => {
    return userData.email || "";
  };

  const getUserInitial = () => {
    if (userData.nombre) {
      return userData.nombre.charAt(0).toUpperCase();
    } else if (userData.email) {
      return userData.email.charAt(0).toUpperCase();
    } else {
      return "U";
    }
  };

  const calcularProgresoTotal = () => {
    if (!curso || !curso.modulos) return 0;
    const totalClases = totales.clasesTotal;
    if (totalClases === 0) return 0;
    return Math.round((totales.clasesCompletadas / totalClases) * 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-white">Cargando información del curso...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center">
        <div className="bg-red-900/30 p-6 rounded-xl border border-red-700/50 text-white">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute h-full w-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Course Header */}
        <div className="grid lg:grid-cols-[1fr,380px] gap-8 mb-12">
          {/* Course Information */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {curso?.titulo || "Curso de Negociación"}
                </h1>
                <div className="flex flex-col gap-1">
                  <p className="text-gray-100 font-medium">Instructor: {curso?.Tutor || "Dr. Carlos Mendoza"}</p>
                  <p className="text-sm text-gray-400">{curso?.ProfesionTutor || "PhD en Resolución de Conflictos - Harvard Business School"}</p>
                </div>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-2xl">
                <Building2 className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Duración</p>
                  <p className="text-gray-100">{totales.duracionTotal}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Video className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Clases Completadas</p>
                  <p className="text-gray-100">{totales.clasesCompletadas} de {totales.clasesTotal}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Participantes</p>
                  <p className="text-gray-100">{totales.usuariosCreados}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Material Disponible</p>
                  <p className="text-gray-100">Documentos y recursos</p>
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-gray-100 font-medium mb-1">Progreso del Programa</h3>
                  <p className="text-sm text-gray-400">Continúa tu camino hacia la excelencia en negociación</p>
                </div>
                <span className="text-2xl font-bold text-blue-400">{calcularProgresoTotal()}%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{width: `${calcularProgresoTotal()}%`}}
                ></div>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <div className="text-center mb-6">
              <div className="inline-block mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto ring-4 ring-blue-500/20">
                  <span className="text-3xl font-bold text-white">
                    {getUserInitial()}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-100 mb-1">{getUserFullName()}</h2>
                <p className="text-gray-400 text-sm mb-1">{getUserEmail()}</p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                  <h4 className="font-medium text-gray-100 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    Objetivos del Programa
                  </h4>
                  <ul className="space-y-2">
                    {objetivosPrograma.map((objetivo, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                        {objetivo}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                  <h4 className="font-medium text-gray-100 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    Próximas Clases
                  </h4>
                  <div className="space-y-3">
                    {proximasClases.length > 0 ? (
                      proximasClases.map((clase, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-sm text-gray-100">{clase.titulo}</p>
                            <p className="text-xs text-gray-400">
                              {clase.fecha_clase ? new Date(clase.fecha_clase).toLocaleDateString('es-ES', {
                                day: 'numeric',
                                month: 'long'
                              }) : 'Fecha por confirmar'}
                            </p>
                            <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 mt-1">
                              Clase en vivo
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400">No hay clases programadas próximamente</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-gray-100">{totales.duracionTotal.split(' ')[0]}</span>
            </div>
            <p className="text-sm text-gray-400">Horas de Estudio</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <Video className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-gray-100">{totales.clasesCompletadas}/{totales.clasesTotal}</span>
            </div>
            <p className="text-sm text-gray-400">Clases Completadas</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-gray-100">{totales.usuariosCreados}</span>
            </div>
            <p className="text-sm text-gray-400">Participantes</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-gray-100">{curso?.modulos?.length || 0}</span>
            </div>
            <p className="text-sm text-gray-400">Módulos Disponibles</p>
          </div>
        </div>
        
        {/* Soporte Técnico */}
        <div className="flex justify-center mt-10">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl blur-lg opacity-70" />
            <div className="relative bg-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-xl py-4 px-6 flex items-center justify-between shadow-lg">
              <p className="text-gray-200 font-medium mr-4">
                ¿Necesitas ayuda?
              </p>
              <a 
                href="/help" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                           bg-blue-600/20 hover:bg-blue-600/30
                           text-blue-300 text-sm font-medium
                           border border-blue-600/30
                           transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Centro de Ayuda</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProfile;