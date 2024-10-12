
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Asegúrate de que el nombre del archivo CSS coincida
import { Book, Users, GraduationCap, PenTool, FileText } from 'lucide-react';

const DashboardCard = ({ to, title, description, icon: Icon }) => (
  <Link to={to} className="dashboard-card">
    <Icon className="dashboard-card-icon" />
    <h3 className="dashboard-card-title">{title}</h3>
    <p className="dashboard-card-description">{description}</p>
  </Link>
);

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Gestor Escolar</h1>
      <div className="dashboard-options">
        <DashboardCard
          to="/teacherlist"
          title="Administrar Profesores"
          description="Agregar, editar y eliminar profesores."
          icon={Users}
        />
        <DashboardCard
          to="/studentlist"
          title="Administrar Estudiantes"
          description="Agregar, editar y eliminar estudiantes."
          icon={GraduationCap}
        />
        <DashboardCard
          to="/course"
          title="Administrar Cursos"
          description="Crear y administrar cursos."
          icon={Book}
        />
        <DashboardCard
          to="/grades"
          title="Asignar Notas"
          description="Asignar y actualizar notas de estudiantes."
          icon={PenTool}
        />
        <DashboardCard
          to="/reports"
          title="Generar Reportes"
          description="Generar y descargar reporte de notas en PDF."
          icon={FileText}
        />
      </div>
    </div>
  );
};

export default Dashboard;






