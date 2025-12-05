import { FaGithub, FaExternalLinkAlt, FaTools, FaLightbulb, FaRocket } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
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
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <h1 className="text-3xl font-bold">404 | Project Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f172a] text-gray-300 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        <Link href="/#projects" className="flex items-center text-[#6366F1] hover:text-[#EC4899] transition mb-8">
          &larr; Back to Projects
        </Link>
        
        <section className="mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-3">{project.title}</h1>
          <p className="text-xl text-[#EC4899] mb-6">{project.tagline}</p>
          
          <div className="relative w-full md:h-96 rounded-xl overflow-hidden shadow-2xl shadow-[#6366F1]/10">
            <img
              src={project.imageUrl}
              alt={project.imageAlt}
             
              className="transition-transform object-cover duration-500 hover:scale-105"
            />
          </div>
        </section>

        <section className="flex flex-wrap gap-4 mb-12">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-semibold rounded-lg shadow-lg shadow-[#6366F1]/50 hover:shadow-[#EC4899]/50 transition-all transform hover:scale-[1.02]"
          >
            <FaExternalLinkAlt size={16} />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#0f172a] border border-gray-700 text-white font-semibold rounded-lg hover:border-[#6366F1] hover:shadow-lg hover:shadow-[#6366F1]/30 transition-all transform hover:scale-[1.02]"
          >
            <FaGithub size={18} />
            GitHub Repository
          </a>
        </section>

        <section className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white border-b border-gray-700 pb-2">Overview</h2>
            <p className="text-lg leading-relaxed">{project.fullDescription}</p>
          </div>

          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-white border-b border-gray-700 pb-2 mb-4"><FaTools className="inline-block mr-2 text-[#6366F1]" />Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1 text-sm font-semibold bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/30 rounded-full hover:bg-[#6366F1]/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-gray-800 my-12" />

        <section className="grid lg:grid-cols-2 gap-12 mb-12">
          
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-3 pl-4 text-gray-400">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="font-medium text-white">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-4"><FaLightbulb className="inline-block mr-2 text-[#EC4899]" />Technical Learnings</h3>
            <ul className="list-disc list-inside space-y-3 pl-4 text-gray-400">
              {project.technicalLearnings.map((learning, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="font-medium text-white">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="border-gray-800 my-12" />

        <section className="grid lg:grid-cols-2 gap-12 mb-12">
          
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Challenges Faced</h3>
            <ul className="list-disc list-inside space-y-3 pl-4 text-gray-400">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="font-medium text-white">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-4"><FaRocket className="inline-block mr-2 text-green-400" />Future Plans</h3>
            <ul className="list-disc list-inside space-y-3 pl-4 text-gray-400">
              {project.futurePlans.map((plan, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="font-medium text-white">{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        <section className="mt-12 p-6 bg-[#0f172a]/70 border border-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-3">Deployment Process</h3>
            <p className="text-gray-400">{project.deploymentProcess}</p>
        </section>

      </div>
    </main>
  );
}