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

<!-- <div class="container m-12">
  <h1 class="text-center text-3xl font-bold my-6">Tegan Seitz</h1>
	<blockquote class="text-center text-xl italic my-6">
		Senior developer looking to carve a purposeful path in life, and to contribute to a team that
		provides real value and impact to the world.
	</blockquote>

</div> -->
<Background />

<main class="absolute grid grid-cols-12 w-full text-white p-24 gap-y-96">
	<header
		class="text-3xl flex flex-col items-center bg-slate-800 col-start-4 col-span-6 p-8 mb-8 rounded-lg"
	>
		<h1>Tegan Seitz</h1>
		<p>Welcome to my website! 🦒🧙🏻‍♂️</p>
	</header>

	<blockquote class="text-2xl p-8 rounded-lg col-start-4 col-span-6 bg-slate-800">
		<p>I'm a developer looking to carve a purposeful path in life</p>
	</blockquote>

	<section class="col-start-2 col-span-10 grid grid-cols-3 grid-flow-row gap-6">
		<h2 class="text-3xl col-span-full">👩🏽‍🚀 Projects</h2>

		{#each projects as project}
			<a class="p-8 bg-slate-800 rounded-lg" href={project.link} target="_blank" rel="noreferrer">
				<h3 class="text-2xl">
					{project.title}
				</h3>
				<p>{project.description}</p>
			</a>
		{/each}
	</section>

	<blockquote class="col-start-2 col-span-4 bg-slate-800 rounded-lg p-8">
		<p>The best way out is always through <br />-Robert Frost</p>
	</blockquote>

	<section class="col-start-2 col-span-10 bg-slate-800 rounded-lg p-8">
		<h2 class="text-3xl">Work History 🧑🏼‍💻</h2>

		<h3 class="text-2xl mt-8 mb-2">ICON - Full Stack Developer (Apr 2018-Present)</h3>
		<ul>
			<ul class="list-disc list-outside">
				<li>Began career learning Python and building an ETL layer for various projects</li>
				<li>Kept up with the front-end world, self teaching React on the side.</li>
				<li>Shifted to more of a front-end focus after ETL projects</li>
				<li>Carried over Python knowledge to become a full stack engineer</li>
				<li>
					Worked with our architect to build out a back-end infrastructure with Azure, Python for
					data processing and Flask APIs
				</li>
				<li>
					Promoted to the role of Technical Lead for our Clinical Data Repository (CDR) project, a
					project to centralize Clinical Data
				</li>
				<li>Used technical knowledge to build out a custom front-end stack from the ground up</li>
				<li>
					Shifted to more of a leader role, running our morning developer meetings and assisting
					developers as necessary
				</li>
				<li>
					Designed best practices and ways of working for the project, including project Git flow,
					documentation and other administrative tasks
				</li>
				<li>
					More than doubled testing speed by adjusting the testing stack mid way through phase 1 of
					the project, greatly increasing developer productivity
				</li>
			</ul>

			<h3 class="text-2xl mt-8 mb-2">Se2 - Software Developer (May 2014-Mar 2018)</h3>
			<ul class="list-disc list-outside">
				<li>
					Sole developer of the interface’s team admin website using Angular (self taught 4+ years)
				</li>
				<li>Migrated system from Angular 1 to Angular 2</li>
				<li>Moved to Web Development team in 2017 to continue working with Angular and C#</li>
				<li>
					Worked with senior developers to redesign the web interface with the goal of creating a
					“Unified Web” to gather and show external clients their financial data.
				</li>
				<li>Team go-to for user experience design</li>
				<li>Cross department recognition (web/interface work)</li>
			</ul>
		</ul>
	</section>
</main>
