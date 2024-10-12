import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/Student/StudentList';
import StudentForm from './components/Student/StudentForm';
import CourseList from './components/Course/CourseList';
import CourseForm from './components/Course/CourseForm';
import TeachersForm from './components/Teacher/teachersForm.js';
import TeachersList from './components/Teacher/teachersList.js';
import GradeList from './components/Grade/GradeList';
import GradeForm from './components/Grade/GradeForm';
import Home from './pages/Home';
import CreateUser from './components/User/createuser.js';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/students" element={<StudentList />} />
                <Route path="/students/new" element={<StudentForm />} />
                <Route path="/courses" element={<CourseList />} />
                <Route path="/courses/new" element={<CourseForm />} />
                <Route path="/teachers" element={<TeachersList />} />
                <Route path="/teachers/new" element={<TeachersForm />} />
                <Route path="/grades" element={<GradeList />} />
                <Route path="/grades/new" element={<GradeForm />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/CrearUsuario" element={<CreateUser />} />

            </Routes>
        </Router>
    );
}

export default App;
