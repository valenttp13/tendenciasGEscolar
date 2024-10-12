import React, { useState } from 'react';
import { createStudent } from '../../api/studentApi'; 

const StudentsForm = ({ onStudentCreated }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [error, setError] = useState(''); 
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newStudent = { name, age, course };

        setLoading(true); 
        setError('');

        try {
            await createStudent(newStudent); 
            onStudentCreated(); 
            setName(''); 
            setAge('');
            setCourse('');
        } catch (error) {
            console.error('Error al crear estudiante', error);
            setError('Error al crear estudiante. Inténtalo de nuevo.'); 
        } finally {
            setLoading(false); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <h2>Crear Estudiante</h2>
            {error && <p className="error-message">{error}</p>} {/* Mensaje de error */}
            <div>
                <label htmlFor="name">Nombre:</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label htmlFor="age">Edad:</label>
                <input 
                    type="number" 
                    id="age" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label htmlFor="course">Curso:</label>
                <input 
                    type="text" 
                    id="course" 
                    value={course} 
                    onChange={(e) => setCourse(e.target.value)} 
                    required
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Creando...' : 'Crear Estudiante'}
            </button>
        </form>
    );
};

export default StudentsForm;


