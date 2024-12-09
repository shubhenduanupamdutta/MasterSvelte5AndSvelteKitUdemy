<script lang="ts">
    function onClick() {
        console.log("Clicked from inside the script tag");
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button onclick={() => console.log('clicked')}>Click me</button>
<button onclick={onClick}>Click me from inside the script tag</button>

<style>
	h1 {
		color: blue;
	}
</style>
