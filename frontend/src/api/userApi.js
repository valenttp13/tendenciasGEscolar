import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';


export const getUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users/`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los usuarios', error);
        throw error; 
    }
};


export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el usuario con ID ${userId}`, error);
        throw error;
    }
};


export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/`, userData);
        return response.data; 
    } catch (error) {
        console.error('Error al crear el usuario', error);
        throw error;
    }
};


export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${userId}/`, userData);
        return response.data; 
    } catch (error) {
        console.error(`Error al actualizar el usuario con ID ${userId}`, error);
        throw error;
    }
};


export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/users/${userId}/`);
        return response.data; 
    } catch (error) {
        console.error(`Error al eliminar el usuario con ID ${userId}`, error);
        throw error;
    }
};
