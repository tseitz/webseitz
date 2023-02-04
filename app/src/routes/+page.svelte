<script>
	import Background from '$ws-root/lib/background/Background.svelte';

	const projects = [
		{
			title: 'TuneWrangler',
			link: 'https://github.com/tseitz/TuneWrangler',
			description: 'Application to wrangle my tunes'
		},
		{
			title: 'Crypto Trading Bot',
			link: 'https://github.com/tseitz/crypto',
			description: 'My crypto alerts and trading bot'
		},
		{
			title: 'Sports Betting Foundry',
			link: 'https://github.com/tseitz/sports-betting-foundry',
			description:
				'Play app for betting my family in football. Built with Sveltekit, Thales and Foundry toolkit'
		},
		{
			title: 'Spotify Smart Playlist',
			link: 'https://github.com/tseitz/spotify-smart-playlists',
			description: 'Turns any Spotify playlist into a smart playlist'
		},
		{
			title: 't-configs',
			link: 'https://github.com/tseitz/t-configs',
			description: 'My config files'
		},
		{
			title: 'Missy Midwest',
			link: 'https://github.com/tseitz/missy-midwest',
			description: "Missy Midwest's Website"
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
			<div class="p-8 bg-slate-800 rounded-lg">
				<h3 class="text-2xl">
					<a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
				</h3>
				<p>{project.description}</p>
			</div>
		{/each}
	</section>

	<blockquote class="col-start-2 col-span-4 bg-slate-800 rounded-lg p-8">
		<p>The best way out is always through <br />-Robert Frost</p>
	</blockquote>

	<section class="col-start-2 col-span-10 bg-slate-800 rounded-lg p-8">
		<h2>🌮 Work History</h2>

		<h3>McDonalds</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<h3>Burger King</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<h3>Taco Bell</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</section>
</main>
