import Link from 'next/link';

const About = () => {
	return (
		<section id="about" className="max-w-3xl mx-auto m-10">
			<h1 className="text-2xl font-bold">Hi there! I&apos;m Ansh</h1>
			<p className="text-lg mt-5">
				I am a second-year Computer Science Engineering undergraduate at{' '}
				<Link href="https://www.bits-pilani.ac.in/">
					<a className="text-blue-600">
						Birla Institute of Technology and Science, Pilani
					</a>
				</Link>
				.
			</p>
			<p className="text-lg mt-2">
				I&apos;m currently working at{' '}
				<Link href="https://metabrainz.org/">
					<a className="text-blue-600">MetaBrainz</a>
				</Link>{' '}
				as a Student Developer {' ('}
				<Link href="https://summerofcode.withgoogle.com/programs/2022/projects/dTPa1VpE">
					<a className="text-blue-600">GSoC 2022</a>
				</Link>
				{').'}
			</p>
			<p className="text-lg mt-2">
				My recent interests include full-stack development. I am very
				passionate about programming and engineering as a whole.
			</p>
			<p className="text-lg mt-2">
				I am actively contributing to Open Source projects such as{' '}
				<Link href="https://critiquebrainz.org">
					<a className="text-blue-600">CritiqueBrainz</a>
				</Link>
				{' and '}
				<Link href="https://bookbrainz.org">
					<a className="text-blue-600">BookBrainz</a>
				</Link>
				.
			</p>
		</section>
	);
};

export default About;
