import ProjectCard from './ProjectCard';
import config from '../../config';

const Project = () => {
	return (
		<section id="projects" className="max-w-3xl px-3 sm:px-0 mx-auto m-10">
			<h1 className="text-2xl font-bold">Projects</h1>
			<div className="flex flex-wrap gap-5 mt-5">
				{config.projects.map((project, index) => (
					<ProjectCard
						key={index}
						name={project.name}
						description={project.description}
						link={project.link}
						repoLink={project.repoLink}
					/>
				))}
			</div>
		</section>
	);
};

export default Project;
