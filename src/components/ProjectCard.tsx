import Link from 'next/link';

const ProjectCard = (props: {
	name: string;
	link: string;
	repoLink: string;
	description: string;
}) => {
	const name = props.name;
	const liveLink = props.link;
	const repoLink = props.repoLink;
	let description = props.description;
	if (description.length > 105) {
		description = description.substring(0, 105) + '...';
	}
	return (
		<div className="w-[22.5rem] rounded-lg p-5 border-2 bg-[#f8fafc]">
			<div className="flex flex-row justify-between bg-white p-5 border rounded-lg border-transparent">
				<div className="flex flex-col">
					<h1 className="text-xl font-bold mb-3 mx-auto">{name}</h1>
					<p className="text-base">{description}</p>
					<div className="mt-2 flex gap-2">
						<button className="bg-transparent hover:bg-blue-100 font-semibold py-1 px-4 border border-blue-500 rounded">
							<Link href={liveLink}>
								<a className="text-blue-600">Live</a>
							</Link>
						</button>
						<button className="bg-transparent hover:bg-blue-100 font-semibold py-1 px-4 border border-blue-500 rounded">
							<Link href={repoLink}>
								<a className="text-blue-600">Repo</a>
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
