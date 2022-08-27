import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="bg-primary-blue p-3">
			<div className="max-w-3xl mx-auto flex flex-row items-center justify-between text-black">
				<h1 className="text-base">
					Built with{' '}
					<Link href="https://nextjs.org">
						<a className="font-black">Next.js</a>
					</Link>{' '}
					and{' '}
					<Link href="https://tailwindcss.com">
						<a className="font-black">Tailwind CSS</a>
					</Link>
				</h1>
				<h1 className="text-base">
					&copy; Ansh Goyal 2022 &ndash; Present
				</h1>
			</div>
		</footer>
	);
};

export default Footer;
