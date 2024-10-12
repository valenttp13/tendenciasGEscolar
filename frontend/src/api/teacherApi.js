import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

export const getTeachers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/teachers/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching teachers', error);
        throw error;
    }
};

export const getTeacherById = async (teacherId) => {
    try {
        const response = await axios.get(`${BASE_URL}/teachers/${teacherId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching teacher', error);
        throw error;
    }
};


export const createTeacher = async (teacherData) => {
    try {
        const response = await axios.post(`${BASE_URL}/teachers/`, teacherData);
        return response.data;
    } catch (error) {
        console.error('Error creating teacher', error);
        throw error;
    }
};


export const updateTeacher = async (teacherId, teacherData) => {
    try {
        const response = await axios.put(`${BASE_URL}/teachers/${teacherId}/`, teacherData);
        return response.data;
    } catch (error) {
        console.error('Error updating teacher', error);
        throw error;
    }
};


export const deleteTeacher = async (teacherId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/teachers/${teacherId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting teacher', error);
        throw error;
    }
};
