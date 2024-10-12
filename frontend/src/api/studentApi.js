import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';  // Cambia esto si tu backend está en otro puerto o URL

export const getStudents = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/students/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching students', error);
        throw error;
    }
};

export const getStudentById = async (studentId) => {
    try {
        const response = await axios.get(`${BASE_URL}/students/${studentId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching student', error);
        throw error;
    }
};

export const createStudent = async (studentData) => {
    try {
        const response = await axios.post(`${BASE_URL}/students/`, studentData);
        return response.data;
    } catch (error) {
        console.error('Error creating student', error);
        throw error;
    }
};

export const updateStudent = async (studentId, studentData) => {
    try {
        const response = await axios.put(`${BASE_URL}/students/${studentId}/`, studentData);
        return response.data;
    } catch (error) {
        console.error('Error updating student', error);
        throw error;
    }
};

export const deleteStudent = async (studentId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/students/${studentId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting student', error);
        throw error;
    }
};
