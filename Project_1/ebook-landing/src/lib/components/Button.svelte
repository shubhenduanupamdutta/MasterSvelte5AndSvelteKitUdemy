<script>
	let { children, ...props } = $props();
</script>

<button {...props}> {@render children()}</button>

<style>
	button {
		background-color: black;
		color: white;
		padding: 12px 16px;
		font-weight: normal;
		font-size: 18px;
		text-transform: uppercase;
		transition: all 0.3s;
		border: 1px solid white;
	}

	button:hover {
		background-color: white;
		color: black;
	}
</style>
