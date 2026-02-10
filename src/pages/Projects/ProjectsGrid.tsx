import React, { useState } from 'react';
import './ProjectsGrid.css';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../utils/constants';

const ProjectsGrid: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'planned'>('all');
  
  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'active') return project.status === 'active';
    if (filter === 'completed') return project.status === 'completed';
    if (filter === 'planned') return project.status === 'planned';
    return true;
  });

  return (
    <div className="projects-grid-container">
      <div className="projects-header">
        <h1 className="projects-title">📊 REAL PROJECTS IN SYRIA</h1>
        <p className="projects-subtitle">Every project is 100% verified, tracked, and transparent</p>
        
        <div className="filter-buttons">
          {['all', 'active', 'completed', 'planned'].map((filterType) => (
            <button
              key={filterType}
              className={`filter-btn ${filter === filterType ? 'active' : ''}`}
              onClick={() => setFilter(filterType as any)}
            >
              {filterType === 'all' && '👁️ All Projects'}
              {filterType === 'active' && '🚧 Active'}
              {filterType === 'completed' && '✅ Completed'}
              {filterType === 'planned' && '📅 Planned'}
            </button>
          ))}
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-number">€{projectsData.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}</span>
          <span className="stat-label">Total Investment</span>
        </div>
        <div className="stat">
          <span className="stat-number">{projectsData.filter(p => p.status === 'completed').length}</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat">
          <span className="stat-number">{projectsData.reduce((sum, p) => sum + p.impact, 0).toLocaleString()}</span>
          <span className="stat-label">Lives Impacted</span>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found with this filter</p>
        </div>
      )}

      <div className="blockchain-verification">
        <h3>🔗 Blockchain Verification</h3>
        <p>Every transaction is recorded on Ethereum Mainnet:</p>
        <code>0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7</code>
      </div>
    </div>
  );
};

export default ProjectsGrid;