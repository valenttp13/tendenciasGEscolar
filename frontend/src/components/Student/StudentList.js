import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../../api/studentApi'; 

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getStudents(); 
                setStudents(data);
            } catch (error) {
                console.error('Error al obtener estudiantes', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchStudents();
    }, []);

    const handleDelete = async (studentId) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
            try {
                await deleteStudent(studentId); 
                setStudents(students.filter((student) => student.id !== studentId)); 
            } catch (error) {
                console.error('Error al eliminar estudiante', error);
            }
        }
    };

    if (loading) {
        return <div>Cargando estudiantes...</div>; 
    }

    return (
        <ul>
            {students.length === 0 ? (
                <li>No hay estudiantes disponibles.</li>
            ) : (
                students.map((student) => (
                    <li key={student.id}>
                        {student.name} ({student.email})
                        <button onClick={() => handleDelete(student.id)}>Eliminar</button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default StudentsList;
