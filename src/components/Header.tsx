import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const NavButtons = () => {
		return (
			<>
				<Link href="/" legacyBehavior>
					<h2 className="hover:text-secondary-blue">About</h2>
				</Link>
				<Link href="/#projects" legacyBehavior>
					<h2 className="hover:text-secondary-blue">Projects</h2>
				</Link>
				<Link href="/#skills" legacyBehavior>
					<h2 className="hover:text-secondary-blue">Skills</h2>
				</Link>
				<Link href="/#contact" legacyBehavior>
					<h2 className="hover:text-secondary-blue">Contact</h2>
				</Link>
			</>
		);
	};

	return (
		<header className="bg-primary-blue p-5 sticky top-0">
			<div className="max-w-3xl px-3 sm:px-0 mx-auto flex flex-row items-center justify-between text-black">
				<Link href="/" legacyBehavior>
					<h1 className="text-3xl sm:text-2xl font-bold">
						Ansh Goyal
					</h1>
				</Link>
				<button
					type="button"
					className="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg md:hidden active:ring-2 active:ring-gray-400"
					onClick={toggleMenu}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"
						></path>
					</svg>
				</button>

				<div className="hidden sm:flex flex-row space-x-4 text-xl">
					<NavButtons />
				</div>
			</div>
			{showMenu && (
				<div className="top-0 right-0 mt-5 mr-5">
					<div
						className="flex flex-col space-y-4"
						onClick={toggleMenu}
					>
						<NavButtons />
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
