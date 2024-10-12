import React, { useEffect, useState } from 'react';
import { getGrades, deleteGrade } from '../../api/gradeApi'; 

const GradesList = ({ onGradeSelected }) => {
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                const data = await getGrades(); 
                setGrades(data);
            } catch (error) {
                console.error('Error al obtener calificaciones', error);
            }
        };

        fetchGrades();
    }, []);

    const handleDelete = async (gradeId) => {
        try {
            await deleteGrade(gradeId); 
            setGrades(grades.filter((grade) => grade.id !== gradeId)); 
        } catch (error) {
            console.error('Error al eliminar calificación', error);
        }
    };

    return (
        <ul>
            {/* Lista de calificaciones */}
        </ul>
    );
};

export default GradesList;
