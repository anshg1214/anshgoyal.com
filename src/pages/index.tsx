import type { NextPage } from 'next';
import Header from '../components/Header';
import About from '../components/About';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<About />
			<Project />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
