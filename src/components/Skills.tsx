const Skills = () => {
	return (
		<section id="skills" className="max-w-3xl mx-auto m-10">
			<h1 className="text-2xl font-bold">Skills</h1>
			<p className="text-lg mt-4">
				During the course of my journey, I&apos;ve built a solid
				foundation in computer science and web development. I am
				familiar with the following :
			</p>
			<ul className="list-disc list-inside mt-2 text-lg">
				<li>
					<span className="font-extrabold">Languages: </span>{' '}
					TypeScript • JavaScript • Python • C++
				</li>
				<li>
					<span className="font-extrabold">Web Development: </span>{' '}
					React • NextJS • Flask • ExpressJS
				</li>
				<li>
					<span className="font-extrabold">Misc: </span> Docker •
					PostgreSQL • MongoDB • Bash
				</li>
			</ul>
		</section>
	);
};

export default Skills;
