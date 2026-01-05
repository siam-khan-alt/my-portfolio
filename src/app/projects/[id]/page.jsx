import { FaGithub, FaExternalLinkAlt, FaTools, FaLightbulb, FaRocket } from 'react-icons/fa';
import Link from 'next/link';
import { projectsData } from '../../../data/projectsData';

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const project = projectsData.find(p => p.id === parseInt(awaitedParams.id)); 
  
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} - Project Details`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const awaitedParams = await params;
  const projectId = parseInt(awaitedParams.id); 
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>
          404 | Project Not Found
        </h1>
      </div>
    );
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      color: 'var(--text-secondary)',
      padding: '4rem 2rem 4rem',
    }}>
      <div className="max-w-6xl mx-auto">

        <Link 
          href="/#projects" 
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'var(--accent-primary)',
            marginBottom: '2rem',
            fontSize: '1rem',
            textDecoration: 'none',
          }}
          className="hover:text-[var(--accent-secondary)] transition-colors"
        >
          &larr; Back to Projects
        </Link>
        
        <section style={{ marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            marginBottom: '1rem',
          }}>
            {project.title}
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--accent-secondary)',
            marginBottom: '2rem',
          }}>
            {project.tagline}
          </p>
          
          <div className="glass-card" style={{
            borderRadius: '24px',
            overflow: 'hidden',
            marginBottom: '2rem',
          }}>
            <img
              src={project.imageUrl}
              alt={project.imageAlt}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </section>

        <section style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #6366f1, #ec4899)',
              color: 'white',
              fontWeight: 600,
              borderRadius: '12px',
              textDecoration: 'none',
            }}
          >
            <FaExternalLinkAlt size={16} />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'transparent',
              border: '2px solid var(--accent-primary)',
              color: 'var(--accent-primary)',
              fontWeight: 600,
              borderRadius: '12px',
              textDecoration: 'none',
            }}
          >
            <FaGithub size={18} />
            GitHub Repository
          </a>
        </section>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          
          <div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              borderBottom: '2px solid var(--border-color)',
              paddingBottom: '0.5rem',
            }}>
              Overview
            </h2>
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
            }}>
              {project.fullDescription}
            </p>
          </div>

          <div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              borderBottom: '2px solid var(--border-color)',
              paddingBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <FaTools style={{ color: 'var(--accent-primary)' }} />
              Tech Stack
            </h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}>
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    background: 'var(--bg-tertiary)',
                    color: 'var(--accent-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '20px',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '3rem 0' }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          
          <div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}>
              Key Features
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '0.75rem',
                  lineHeight: 1.6,
                }}>
                  <span style={{ color: 'var(--accent-primary)', marginTop: '0.25rem' }}>▹</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <FaLightbulb style={{ color: 'var(--accent-secondary)' }} />
              Technical Learnings
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {project.technicalLearnings.map((learning, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '0.75rem',
                  lineHeight: 1.6,
                }}>
                  <span style={{ color: 'var(--accent-secondary)', marginTop: '0.25rem' }}>▹</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '3rem 0' }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          
          <div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}>
              Challenges Faced
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {project.challenges.map((challenge, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '0.75rem',
                  lineHeight: 1.6,
                }}>
                  <span style={{ color: 'var(--accent-primary)', marginTop: '0.25rem' }}>▹</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <FaRocket style={{ color: '#10b981' }} />
              Future Plans
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {project.futurePlans.map((plan, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '0.75rem',
                  lineHeight: 1.6,
                }}>
                  <span style={{ color: '#10b981', marginTop: '0.25rem' }}>▹</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="glass-card" style={{
          padding: '2rem',
          borderRadius: '20px',
          marginTop: '3rem',
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '1rem',
          }}>
            Deployment Process
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}>
            {project.deploymentProcess}
          </p>
        </div>

      </div>
    </main>
  );
}