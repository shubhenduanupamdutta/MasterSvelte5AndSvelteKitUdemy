<script>
	import authorPic from '$assets/PossibleProfilePic.jpg';
</script>

<section class="author-section">
	<h2 class="mb-l">About the Author</h2>
	<div class="author-container">
		<div class="author-text">
			<p class="mb-xs">
				Shubhendu Dutta is an accomplished international relocation consultant with over a decade of
				firsthand experience navigating expatriate life across Europe. Having personally relocated
				to Spain in 2015, he brings a unique blend of professional expertise and personal insights
				into the complex world of international living and cultural adaptation.
			</p>
			<p>
				A global mobility expert with degrees in international business and cross-cultural
				communications, Shubhendu has advised hundreds of professionals and families on successful
				international transitions. His work combines pragmatic guidance with a deep understanding of
				the emotional and practical challenges of making a new country your home, making him a
				trusted voice in expatriate circles.
			</p>
		</div>
		<img src={authorPic} alt="Author Shubhendu A. Dutta" />
	</div>
</section>

<style>
	.author-section {
		padding: 80px 0;
		margin-left: 9vw;
		margin-right: 15vw;
		max-width: 1150px;
        height: 100vh;
        overflow: hidden;
	}

	.author-container {
		display: flex;
		justify-content: space-between;
	}

	.author-container img {
		width: 40%;
		border: 6px solid black;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
	}

	.author-text {
		width: 55%;
	}
</style>
