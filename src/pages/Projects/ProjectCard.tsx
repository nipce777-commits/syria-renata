import React from 'react';
import './ProjectCard.css';

interface Project {
  id: number;
  title: string;
  location: string;
  status: 'active' | 'completed' | 'planned';
  progress: number;
  budget: number;
  donor: string;
  impact: number;
  timeline: string;
  description: string;
  blockchainHash: string;
  gps: string;
  needsFunding: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColors = {
    active: '#FFA500',
    completed: '#4CAF50',
    planned: '#2196F3'
  };

  const statusText = {
    active: 'In Progress',
    completed: 'Completed',
    planned: 'Planning'
  };

  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span 
          className="project-status"
          style={{ backgroundColor: statusColors[project.status] }}
        >
          {statusText[project.status]}
        </span>
      </div>

      <div className="project-location">
        <span className="location-icon">📍</span>
        <span className="location-text">{project.location}</span>
      </div>

      <div className="project-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <span className="progress-text">{project.progress}% complete</span>
      </div>

      <div className="project-details">
        <div className="detail">
          <span className="detail-label">Budget:</span>
          <span className="detail-value">€{project.budget.toLocaleString()}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Donor:</span>
          <span className="detail-value donor-name">{project.donor}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Impact:</span>
          <span className="detail-value impact-number">{project.impact.toLocaleString()} lives</span>
        </div>
        <div className="detail">
          <span className="detail-label">Timeline:</span>
          <span className="detail-value">{project.timeline}</span>
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      {project.blockchainHash && (
        <div className="blockchain-info">
          <span className="blockchain-label">Blockchain:</span>
          <code className="blockchain-hash">{project.blockchainHash.slice(0, 20)}...</code>
        </div>
      )}

      {project.needsFunding && (
        <button className="fund-button">
          💰 FUND THIS PROJECT
        </button>
      )}

      <div className="project-actions">
        <button className="action-btn">View Details</button>
        <button className="action-btn">Track Live</button>
        <button className="action-btn">View GPS</button>
      </div>
    </div>
  );
};

export default ProjectCard;