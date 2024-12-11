<script lang="ts">
	function onClick() {
		console.log('Clicked from inside the script tag');
	}
	let numberOne = $state(0);

	function increment() {
		numberOne++;
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button onclick={() => console.log('clicked')}>Click me</button>
<button onclick={onClick}>Click me from inside the script tag</button>

<button onclick={increment}>Increment the number.</button>

<h1>{numberOne}</h1>
<p>Hello!</p>
<div class="container">
	<p>This is the left side</p>
	<p>This is the right side</p>
</div>

<style>
	h1 {
		color: blue;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	.container {
		display: flex;
		justify-content: space-between;
	}
</style>
