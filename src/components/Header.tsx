import Link from 'next/link';

const Header = () => {
	return (
		<header className="bg-primary-blue p-5 sticky top-0">
			<div className="max-w-3xl mx-auto flex flex-row items-center justify-between text-black">
				<h1 className="text-2xl font-bold">Ansh Goyal</h1>
				<div className="flex flex-row space-x-4 text-xl">
					<h2 className="hover:text-secondary-blue">
						<Link href="/">About</Link>
					</h2>
					<h2 className="hover:text-secondary-blue">
						<Link href="/#projects">Projects</Link>
					</h2>
					<h2 className="hover:text-secondary-blue">
						<Link href="/#skills">Skills</Link>
					</h2>
					<h2 className="hover:text-secondary-blue">
						<Link href="/#contact">Contact</Link>
					</h2>
				</div>
			</div>
		</header>
	);
};

export default Header;
