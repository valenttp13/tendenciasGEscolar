import React, { useEffect, useState } from 'react';
import { getTeachers, deleteTeacher } from '../../api/teacherApi';

const TeachersList = ({ onTeacherSelected }) => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(''); 

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const data = await getTeachers(); 
                setTeachers(data);
            } catch (error) {
                console.error('Error al obtener profesores', error);
                setError('Error al cargar profesores.'); 
            } finally {
                setLoading(false);
            }
        };

        fetchTeachers();
    }, []);

    const handleDelete = async (teacherId) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este profesor?')) {
            try {
                await deleteTeacher(teacherId); 
                setTeachers(teachers.filter((teacher) => teacher.id !== teacherId)); 
            } catch (error) {
                console.error('Error al eliminar profesor', error);
            }
        }
    };

    if (loading) {
        return <div>Cargando profesores...</div>; 
    }

    return (
        <ul>
            {error && <p className="error-message">{error}</p>} {/* Mensaje de error */}
            {teachers.length === 0 ? (
                <li>No hay profesores disponibles.</li>
            ) : (
                teachers.map((teacher) => (
                    <li key={teacher.id}>
                        {teacher.name} ({teacher.email})
                        <button onClick={() => handleDelete(teacher.id)}>Eliminar</button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default TeachersList;

