import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../../api/userApi'; 
const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers(); 
                setUsers(data);
            } catch (error) {
                console.error('Error al obtener usuarios', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            await deleteUser(userId); 
            setUsers(users.filter((user) => user.id !== userId)); 
        } catch (error) {
            console.error('Error al eliminar usuario', error);
        }
    };

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.full_name} ({user.email}) {/* Ajuste aquí */}
                    <button onClick={() => handleDelete(user.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default UserList;
