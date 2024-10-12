
import React, { useState } from 'react';
import { createUser } from '../../api/userApi'; 

const UserForm = ({ onUserCreated }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('student'); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newUser = { full_name: fullName, email, password, phone_number: phoneNumber, birth_date: birthDate, address, role };

        try {
            await createUser(newUser); 
            onUserCreated(); 
            setFullName('');
            setEmail('');
            setPassword('');
            setPhoneNumber('');
            setBirthDate('');
            setAddress('');
            setRole('student'); 
        } catch (error) {
            console.error('Error al crear usuario', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre Completo:</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Número de Teléfono:</label>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div>
                <label>Fecha de Nacimiento:</label>
                <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                />
            </div>
            <div>
                <label>Dirección:</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div>
                <label>Rol:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="student">Estudiante</option>
                    <option value="teacher">Profesor</option>
                    <option value="admin">Administrador</option>
                </select>
            </div>
            <button type="submit">Crear Usuario</button>
        </form>
    );
};

export default UserForm;
