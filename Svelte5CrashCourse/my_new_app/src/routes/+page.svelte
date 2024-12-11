<script lang="ts">
	import UserInput from '$lib/components/UserInput.svelte';

	function onClick() {
		console.log('Clicked from inside the script tag');
	}
	let number = $state(0);

	function increment() {
		number++;
	}

	let userInformation = $derived(
		number == 0
			? "Hey, why don't you try clicking the button above?"
			: `You've clicked the button ${number} times`
	);

	function calculateUserInformation(number: number) {
		if (number === 0) {
			return "Hey, why don't you try clicking on the button?";
		}
		if (number === 1) {
			return "You've clicked once!";
		}
		return `You've clicked ${number} times!`;
	}

	let userInfo = $derived.by(() => calculateUserInformation(number));
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button onclick={() => console.log('clicked')}>Click me</button>
<button onclick={onClick}>Click me from inside the script tag</button>
<br /><br />
<button onclick={increment}>Increment the number.</button>

<h1>{number}</h1>

<h3>First Way (Using html)</h3>
<p>
	{number == 0
		? "Hey, why don't you try clicking the button above?"
		: `You've clicked the button ${number} times`}
</p>

<h3>Second Way (Using Js and derived rune)</h3>
<p>{userInformation}</p>

<h3>Third Way (Using Js and derived rune with a function)</h3>
<p>{userInfo}</p>

<p>Hello!</p>
<div class="container">
	<p>This is the left side</p>
	<p>This is the right side</p>
</div>

<br />
<hr />

<UserInput userName={'Shubhendu'}>
    <h3>This is the stuff passed as children.</h3>
    <h4> This is some extra stuff</h4>
</UserInput>

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
