<script>
	import '../global.css';
    import { goto } from '$app/navigation';

	export let data;

	let searchValue;

	function handleInput(ev) {
		if (ev?.key !== "Enter")
			return;

		// An annoying convention change if you're trying to support both
		//  kinds of deployments. The discussion surrounding this choice
		//  (https://github.com/sveltejs/kit/pull/13191#issuecomment-2558122313)
		//  uses quite charged language to somehow end on the option that's
		//  more work for developers...
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