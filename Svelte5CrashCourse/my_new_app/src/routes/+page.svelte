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

	// Script for UserEmail snippet

	let email = $state('random_name@gmail.co.in');

	let data = $props();

	// Template Syntax demo
	let isEditMode = $state(false);
	let peopleWaiting = $state(['asldkfja134', 'lakdjf1341eq234']);
	$inspect(peopleWaiting);
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

{#snippet userEmail(exampleString: string)}
	<h2>Your Email Address</h2>
	{#if isEditMode}
		<input type="email" bind:value={email} />
	{:else}
		<p>Your email address is: {email}</p>
	{/if}
{/snippet}

<UserInput userName={'Shubhendu'}>
	<h3>This is the stuff passed as children.</h3>
	<h4>This is some extra stuff</h4>
</UserInput>

{@render userEmail('Example 1')}

<br />
<hr />
<h1>Template Syntax Demo</h1>
<hr />
<button onclick={() => (isEditMode = !isEditMode)}>
	{isEditMode ? 'Save Changes' : 'Edit Email'}
</button>

<h1>Waiting Queue</h1>
{#snippet userId(id: string)}
	<li>ID for person waiting {id}</li>
{/snippet}

{#each peopleWaiting as person}
	{@render userId(person)}
{/each}

<button onclick={() => peopleWaiting.push(new Date().getTime().toString())}>I'm waiting</button>

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
