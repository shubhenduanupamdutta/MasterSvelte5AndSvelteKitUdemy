<script lang="ts">
	import type { Snippet } from "svelte";

	// Code for reactive state in input and effect hook

	$effect(() => {
		console.log('Effect hook is running');
		if (userName) {
			console.log('I will send the name to the database, current user name is: ', userName);
		}
	});

    // for typescript compatibility
    interface UserInputInterface {
        userName: string;
        children: Snippet;  // Snippet is a type from svelte
    }
	// Passing data between components
	let { userName, children, ...props }: UserInputInterface = $props();
	// Inspect rune and debugging
	$inspect(userName);
	
	$inspect(props);
</script>

<h1>Reactive State in Input and Effect Hook</h1>
<hr />

<h2>Your Username</h2>
<input type="text" bind:value={userName} />

<p>Your username is <em>{userName}</em></p>

{@render children()}
<style>
	h1 {
		color: blue;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
</style>
