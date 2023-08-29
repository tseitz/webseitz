<script>
	import Background from '$ws-root/lib/background/Background.svelte';

	const projects = [
		{
			title: 'TuneWrangler',
			link: 'https://github.com/tseitz/TuneWrangler',
			description: 'Deno app that wrangles my tunes'
		},
		{
			title: 'Crypto Trading Bot',
			link: 'https://github.com/tseitz/crypto',
			description: 'Crypto alerts and trading bot'
		},
		{
			title: 'Spotify Smart Playlist',
			link: 'https://github.com/tseitz/spotify-smart-playlists',
			description: 'Turns any Spotify playlist into a smart playlist'
		},
		{
			title: 'Sports Betting Foundry',
			link: 'https://github.com/tseitz/sports-betting-foundry',
			description:
				'Play app for betting my family in football. Built with Sveltekit, Thales and Foundry toolkit'
		},
		{
			title: 't-configs',
			link: 'https://github.com/tseitz/t-configs',
			description: 'My config files and settings'
		},
		{
			title: 'Missy Midwest',
			link: 'https://github.com/tseitz/missy-midwest',
			description: "Missy Midwest's Artist Website"
		}
	];
</script>

<Background />

<main class="absolute grid grid-cols-12 w-full text-white p-24 gap-y-96">
	<header
		class="text-3xl flex flex-col items-center text-center bg-slate-800 col-start-2 col-span-10 xl:col-start-4 xl:col-span-6 2xl:col-start-5 2xl:col-span-4 p-6 mb-8 rounded-lg"
	>
		<h1 class="mb-4">Hi, my name is Tegan Seitz</h1>
		<p>Welcome to my website! 🦒🧙🏻‍♂️</p>
	</header>

	<blockquote
		class="text-2xl p-8 rounded-lg col-start-2 col-span-10 xl:col-start-4 xl:col-span-6 2xl:col-start-5 2xl:col-span-4 bg-slate-800"
	>
		<p>I'm a developer looking to carve a purposeful path in life.</p>
	</blockquote>

	<section
		class="col-start-1 col-span-11 lg:col-start-2 lg:col-span-10 grid grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 md:gap-6"
	>
		<h2 class="text-4xl col-span-full">👩🏽‍🚀 Projects</h2>

		{#each projects as project}
			<a
				class="p-8 bg-slate-800 rounded-lg cool-hover"
				href={project.link}
				target="_blank"
				rel="noreferrer"
			>
				<h3 class="text-2xl mb-3">
					{project.title}
				</h3>
				<p>{project.description}</p>
			</a>
		{/each}
	</section>

	<section
		class="col-start-1 col-span-11 lg:col-start-2 lg:col-span-10 bg-slate-800 rounded-lg p-12 md:p-16 leading-8"
	>
		<h2 class="text-4xl">Work History 🧑🏼‍💻</h2>

		<h3 class="text-3xl mt-8 mb-2">Technical Lead / Full-stack Developer</h3>
		<h4 class="text-lg mb-3">ICON plc: April 2018 - Present</h4>
		<ul>
			<ul class="list-disc list-outside">
				<li>Started in a Python role, developing an ETL layer for various projects</li>
				<li>Self-taught React on the side to keep up with the front-end world</li>
				<li>Carried over Python knowledge to a new role as a full-stack developer</li>
				<li>
					Worked with Lead Architect to create a back-end infrastructure built on Azure, Python and
					Flask APIs
				</li>
				<li>
					Promoted to Technical Lead of the Clinical Data Repository (CDR) project, a project to
					aggregate, version and interact with Clinical Data
				</li>
				<li>
					Built a custom front-end stack from the ground up using the latest technologies. React,
					React Query, Vite, BDD framework to plug into our testing
				</li>
				<li>
					Was the sole developer during the POC phase of the project. Helped lay the foundation for
					others to join
				</li>
				<li>
					Designed best practices and ways of working, including project Git flow, Git hooks, CI/CD,
					documentation and other effective standard ways of working
				</li>
				<li>
					Worked as a leader, running morning developer meetings and leading the technical vision
					for the project
				</li>
				<li>
					Swapped out testing infrastructure during the project to greatly increase developer
					productivity
				</li>
				<li>
					Built custom authentication system, with role based route protection and conditional
					masking of data
				</li>
				<li>Integrated Microsoft SSO with internal AD, merging with existing role based system</li>
				<li>Implemented conventional commits for automatic changelog and release notes</li>
				<li>
					Developed a Docker container to be given to Quality Engineers and new developers so they
					could get started right away
				</li>
				<li>Led UI/UX vision for the project in lieu of a designer</li>
			</ul>

			<h3 class="text-3xl mt-8 mb-2">Se2 - Software Developer (May 2014-Mar 2018)</h3>
			<h4 class="text-lg mb-3">Se2: May 2014 - March 2018</h4>
			<ul class="list-disc list-outside">
				<li>
					Started as an intern. 1 of 2 developers out of 26 that was asked to stay through final
					year of school
				</li>
				<li>Sole developer of the Interface's team admin website using Angular (self taught)</li>
				<li>
					Took often vague requirements and created a UX around it, presenting and collaborating my
					ideas with the team
				</li>
				<li>Migrated system from Angular 1 to Angular 2 (a pain)</li>
				<li>Unified Web - 2016-2018</li>
				<li>Moved to Web Development team to continue working with Angular and C#</li>
				<li>
					Worked with senior developers to redesign our web interface with the goal of creating a
					“Unified Web” experience that aggregated client financial data into one place
				</li>
				<li>Team go-to for user experience design</li>
				<li>
					Participated in a hackathon, placing top 3. The company followed through with the project
				</li>
			</ul>
		</ul>
	</section>

	<blockquote class="col-start-2 col-span-4 bg-slate-800 rounded-lg p-8">
		<p>3D things are fun :)</p>
	</blockquote>
</main>

<style>
	.cool-hover:hover {
		transform: scale(1.02) translateY(-3px);
		transition-duration: 200ms;
	}
</style>
