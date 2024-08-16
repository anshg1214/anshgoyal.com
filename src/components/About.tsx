import Link from 'next/link';

const About = () => {
	return (
		<section id="about" className="max-w-3xl px-3 sm:px-0 mx-auto m-10">
			<h1 className="text-2xl font-bold">Hi there! I&apos;m Ansh</h1>
			<p className="text-lg mt-5">
				I am a final-year Computer Science Engineering undergraduate at{' '}
				<Link
					href="https://www.bits-pilani.ac.in/"
					className="text-blue-600"
					rel="noopener noreferrer"
					target="_blank"
				>
					Birla Institute of Technology and Science, Pilani
				</Link>
				.
			</p>
			<p className="text-lg mt-2">
				I&apos;m a software engineer working at{' '}
				<Link
					href="https://metabrainz.org/"
					className="text-blue-600"
					rel="noopener noreferrer"
					target="_blank"
				>
					MetaBrainz
				</Link>{' '}
				and have been a GSoC Student and Mentor for{' '}
				<Link
					href="https://summerofcode.withgoogle.com/programs/2022/projects/dTPa1VpE"
					className="text-blue-600"
					rel="noopener noreferrer"
					target="_blank"
				>
					GSoC 2022
				</Link>
                {' '}and{' '}
                <Link
					href="https://summerofcode.withgoogle.com/programs/2023/projects/STzV7VWb"
					className="text-blue-600"
					rel="noopener noreferrer"
					target="_blank"
				>
					GSoC 2023
				</Link>{' '}
				respectively.
			</p>
			<p className="text-lg mt-2">
				My recent interests include full-stack development. I am very
				passionate about programming and engineering as a whole.
			</p>
			<p className="text-lg mt-2">
				I am actively contributing to Open Source projects such as{' '}
				<Link
					href="https://critiquebrainz.org"
					className="text-blue-600"
					rel="noopener noreferrer"
					target="_blank"
				>
					CritiqueBrainz
				</Link>
				{' and '}
				<Link
					href="https://bookbrainz.org"
					className="text-blue-600"
					rel="noopener noreferrer"
					target="_blank"
				>
					BookBrainz
				</Link>
				.
			</p>
			<br />
			<p className="text-lg mt-2">
				Checkout my{' '}
				<Link
					href="/resume.pdf"
					className="text-blue-600 hover:underline"
					rel="noopener noreferrer"
					target="_blank"
				>
					Resume
				</Link>
				.
			</p>
		</section>
	);
};

export default About;
