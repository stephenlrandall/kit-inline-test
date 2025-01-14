<script>
	import '../global.css';
    import { goto } from '$app/navigation';

	export let data;

	let searchValue;

	function handleInput(ev) {
		if (ev?.key !== "Enter")
			return;

		goto(`?q=${encodeURIComponent(searchValue)}#/search`);
		searchValue = "";
	}
</script>

<div>
	<a href="#/">home</a>
	{#each data.versions as version}
		<a href="#/{version.name}">{version.name}</a>
	{/each}
	<input
		placeholder="Search..."
		bind:value={searchValue}
		on:keyup={handleInput}
	/>
</div>

<slot/>

<style>
	div {
		padding-bottom: 0.75rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid black;
	}

	a {
		margin-right: 1rem;
	}
</style>