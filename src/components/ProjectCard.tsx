import Link from 'next/link';

const ProjectCard = (props: {
	name: string;
	link: string | undefined;
	repoLink: string | undefined;
	description: string;
}) => {
	const name = props.name;
	const liveLink = props.link;
	const repoLink = props.repoLink;
	let description = props.description;
	if (description.length > 121 && (liveLink != undefined || repoLink != undefined)) {
		description = description.substring(0, 127) + '...';
	} else {
        description = description.substring(0, 161) + '...';
    }
	return (
		<div className="w-[22.5rem] rounded-lg p-5 border-2 bg-[#f8fafc]">
			<div className="flex flex-row justify-between bg-white p-5 border rounded-lg border-transparent">
				<div className="flex flex-col">
					<h1 className="text-xl font-bold mb-3 mx-auto">{name}</h1>
					<p className="text-base">{description}</p>
					<div className="mt-2 flex gap-2">
						{liveLink != undefined ? (
							<button className="bg-transparent hover:bg-blue-100 font-semibold py-1 px-4 border border-blue-500 rounded">
								<Link
									href={liveLink}
									className="text-blue-600"
									rel="noopener noreferrer"
									target="_blank"
								>
									Live
								</Link>
							</button>
						) : null}
						{repoLink != undefined ? (
							<button className="bg-transparent hover:bg-blue-100 font-semibold py-1 px-4 border border-blue-500 rounded">
								<Link
									href={repoLink}
									className="text-blue-600"
									rel="noopener noreferrer"
									target="_blank"
								>
									GitHub
								</Link>
							</button>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
