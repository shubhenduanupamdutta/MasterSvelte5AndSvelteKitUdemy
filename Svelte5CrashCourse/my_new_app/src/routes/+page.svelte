<script lang="ts">
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

	// Code for reactive state in input and effect hook
	let userName = $state('');

	$effect(() => {
		console.log('Effect hook is running');
		if (userName) {
			console.log('I will send the name to the database, current user name is: ', userName);
		}
	});

    // Inspect rune and debugging
    $inspect(userName);
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
<h1>Reactive State in Input and Effect Hook</h1>
<hr />

<h2>Your Username</h2>
<input type="text" bind:value={userName} />

<p>Your username is <em>{userName}</em></p>

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
