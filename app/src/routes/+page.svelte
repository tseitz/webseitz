<script>
	import Background from '$ws-root/lib/background/Background.svelte';
</script>

<!-- <div class="container m-12">
  <h1 class="text-center text-3xl font-bold my-6">Tegan Seitz</h1>
	<blockquote class="text-center text-xl italic my-6">
		Senior developer looking to carve a purposeful path in life, and to contribute to a team that
		provides real value and impact to the world.
	</blockquote>

</div> -->
<Background />

<main class="absolute">
	<header class="m-56">
		<h1>Tegan Seitz</h1>
		<p>🚀 Welcome to my website!</p>
	</header>

	<blockquote class="m-56">
		<p>I like making stuff and putting it on the internet</p>
	</blockquote>

	<section class="m-56">
		<h2>📜 Manifesto</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</section>

	<section class="light m-56">
		<h2>👩🏽‍🚀 Projects</h2>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<h2>🏆 Accomplishments</h2>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</section>

	<blockquote class="m-56">
		<p>The best way out is always through <br />-Robert Frost</p>
	</blockquote>

	<section class="left m-56">
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

	<blockquote class="m-56">
		<p>Thanks for watching!</p>
	</blockquote>
</main>

<style>
	main {
		width: 100vw;
		color: white;
		z-index: 99;
		position: absolute;
		margin: 0px auto;
		padding: 120px 0px;

		display: grid;
		grid-template-columns: repeat(12, 1fr);
	}

	h1,
	h2,
	h3,
	blockquote {
		font-family: elevon, sans-serif;
		font-weight: 700;
		font-style: normal;
	}

	header {
		background: var(--dark-bg);
		grid-column: 2 / span 5;
		font-size: 2.5rem;
		padding: 2rem;
		margin-bottom: var(--spacing);
	}

	section {
		grid-column: 2 / 8;
		padding: 1rem;
		background: var(--dark-bg);
		font-size: 1.25rem;
		line-height: 1.5;
		margin-bottom: var(--spacing);
	}

	blockquote {
		margin: 0;
		padding: 0;
		grid-column: 2 / span 9;
		margin-bottom: var(--spacing);
	}

	blockquote p {
		color: black;
		background-color: white;
		font-size: 4rem;
		display: inline;
		line-height: 1;
	}

	.left {
		grid-column: 6 / 12;
	}
</style>
