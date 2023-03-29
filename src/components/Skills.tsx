import config from '../../config';

const Skills = () => {
	return (
		<section id="skills" className="max-w-3xl px-3 sm:px-0 mx-auto m-10">
			<h1 className="text-2xl font-bold">Skills</h1>
			<p className="text-lg mt-4">
				During the course of my journey, I&apos;ve built a solid
				foundation in computer science and web development. I am
				familiar with the following :
			</p>
			<ul className="list-disc list-inside mt-2 text-lg">
				{config.skills.map((skill, index) => (
					<li key={index}>
						<span className="font-extrabold">
							{skill.heading}:{' '}
						</span>{' '}
						{skill.items.map((item, index) => (
							<span key={index}>
								{item}
								{index !== skill.items.length - 1 ? ' • ' : ''}
							</span>
						))}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Skills;
