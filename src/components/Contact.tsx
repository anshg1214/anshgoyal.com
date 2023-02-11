import Link from 'next/link';

const Contact = () => {
	return (
		<section
			id="contact"
			className="max-w-3xl px-3 sm:px-0 mx-auto m-10 text-lg"
		>
			<h1 className="text-2xl font-bold">Contact</h1>
			<p className="mt-4 mb-2">
				If you have any questions, or if you just want to say hi, please
				feel free to reach me at{' '}
				<span className="font-mono select-all">ansh@anshgoyal.com</span>{' '}
				or schedule a meeting using my{' '}
				<Link
					href="https://calendly.com/anshgoyal/30min"
					className="font-mono text-blue-600"
					rel="noopener noreferrer"
					target="_blank"
				>
					Calendly
				</Link>
				.
			</p>
			<p>You can also connect with me on the following platforms:</p>
			<ul className="list-disc list-inside mt-2 font-mono">
				<li>
					<Link
						href="https://www.linkedin.com/in/anshgoyal/"
						className="text-blue-600"
						rel="noopener noreferrer"
						target="_blank"
					>
						LinkedIn
					</Link>
				</li>
				<li>
					<Link
						href="https://github.com/anshg1214/"
						className="text-blue-600"
						rel="noopener noreferrer"
						target="_blank"
					>
						Github
					</Link>
				</li>
				<li>
					<Link
						href="https://t.me/anshgoyal/"
						className="text-blue-600"
						rel="noopener noreferrer"
						target="_blank"
					>
						Telegram
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default Contact;
