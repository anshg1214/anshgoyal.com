import ProjectCard from './ProjectCard';

const Project = () => {
	return (
		<section id="projects" className="max-w-3xl mx-auto m-10">
			<h1 className="text-2xl font-bold">Projects</h1>
			<div className="grid grid-cols-2 gap-5 mt-5">
				<ProjectCard
					name="Taapmaan"
					description="Taapmaan is a web app that fetches the weather data for the next 5 days from the OpenWeatherMap API. Location autocomplete when the user searches for their city, using the OpenStreetMap API. It also displays the current weather data for the user's location using FreeGeoIp API."
					link="https://taapmaan.anshgoyal.com/"
					repoLink="https://github.com/anshg1214/taapmaan/"
				/>
				<ProjectCard
					name="Fridge To Table"
					description="FridgetoTable is a web app that allows users to manage their food inventory, and get recipe suggestions using Edamam API as well as the list of restaurants nearby using Google Maps API. Added Google OAuth2. Used Redis for caching session and API results."
					link="https://fridgetotable.co/"
					repoLink="https://github.com/anshg1214/fridgetotable/"
				/>
			</div>
		</section>
	);
};

export default Project;
