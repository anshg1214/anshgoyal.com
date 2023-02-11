import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="bg-primary-blue py-3">
			<div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between text-black">
				<h1 className="text-base">
					Built with{' '}
					<Link
						href="https://nextjs.org"
						className="font-black"
						rel="noopener noreferrer"
						target="_blank"
					>
						Next.js
					</Link>{' '}
					and{' '}
					<Link
						href="https://tailwindcss.com"
						className="font-black"
						rel="noopener noreferrer"
						target="_blank"
					>
						Tailwind CSS
					</Link>
				</h1>
				<h1 className="text-base">
					&copy; Ansh Goyal 2023 &ndash; Present
				</h1>
			</div>
		</footer>
	);
};

export default Footer;
