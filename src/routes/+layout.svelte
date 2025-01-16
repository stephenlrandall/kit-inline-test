<script>
    import { goto } from '$app/navigation';

	let searchValue;

	function handleInput(ev) {
		if (ev?.key !== 'Enter')
			return;

		goto(`?q=${encodeURIComponent(searchValue)}#/search`);
		searchValue = '';
	}
</script>

<div>
	<a href="#/">home</a>
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

	:global(code) {
		background: #0002;
		padding: 0.15rem;
		border-radius: 0.25rem;
		color: darkred;
	}
</style>