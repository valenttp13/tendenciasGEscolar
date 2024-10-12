import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

export const getGrades = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/grades/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching grades', error);
        throw error;
    }
};

export const getGradeById = async (gradeId) => {
    try {
        const response = await axios.get(`${BASE_URL}/grades/${gradeId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching grade', error);
        throw error;
    }
};

export const createGrade = async (gradeData) => {
    try {
        const response = await axios.post(`${BASE_URL}/grades/`, gradeData);
        return response.data;
    } catch (error) {
        console.error('Error creating grade', error);
        throw error;
    }
};

export const updateGrade = async (gradeId, gradeData) => {
    try {
        const response = await axios.put(`${BASE_URL}/grades/${gradeId}/`, gradeData);
        return response.data;
    } catch (error) {
        console.error('Error updating grade', error);
        throw error;
    }
};

export const deleteGrade = async (gradeId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/grades/${gradeId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting grade', error);
        throw error;
    }
};
