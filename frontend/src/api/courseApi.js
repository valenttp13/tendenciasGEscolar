import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';  

export const getCourses = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/courses/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching courses', error);
        throw error;
    }
};

export const getCourseById = async (courseId) => {
    try {
        const response = await axios.get(`${BASE_URL}/courses/${courseId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching course', error);
        throw error;
    }
};

export const createCourse = async (courseData) => {
    try {
        const response = await axios.post(`${BASE_URL}/courses/`, courseData);
        return response.data;
    } catch (error) {
        console.error('Error creating course', error);
        throw error;
    }
};

export const updateCourse = async (courseId, courseData) => {
    try {
        const response = await axios.put(`${BASE_URL}/courses/${courseId}/`, courseData);
        return response.data;
    } catch (error) {
        console.error('Error updating course', error);
        throw error;
    }
};

export const deleteCourse = async (courseId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/courses/${courseId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting course', error);
        throw error;
    }
};
