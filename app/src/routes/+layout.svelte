<script lang="ts">
	import '$ws-root/app.css';
	import Sider from '$lib/sider/Sider.svelte';
</script>

<svelte:head>
	<title>Tegan Seitz</title>
</svelte:head>

<div class="flex flex-row">
	<Sider />

	<slot />
</div>
