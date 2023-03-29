import Link from 'next/link';
import config from '../../config';

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
				<span className="font-mono select-all">{config.email}</span> or
				schedule a meeting using my{' '}
				<Link
					href={config.calendly}
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
				{config.contact.map((contact, index) => (
					<li key={index}>
						<Link
							href={contact.link}
							className="text-blue-600"
							rel="noopener noreferrer"
							target="_blank"
						>
							{contact.name}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Contact;
