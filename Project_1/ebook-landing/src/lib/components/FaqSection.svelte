<script>
	import InstagramIcon from '$assets/icons/InstagramIcon.svg';
	import { Button, FaqItem } from '$components';
</script>

<section class="landing-page-section">
	<h2 class="mb-l">Frequently Asked Questions</h2>
	<div class="faq-container">
		<FaqItem />
	</div>
	<div class="additional-info">
		<Button class="mt-s">BUY NOW</Button>
		<p class="mt-s">Any Other Question?</p>
		<a href="https://www.instagram.com/shubhenduanupamdutta/">
			<p>
				Hit me up on Instagram <img src={InstagramIcon} class="insta-icon" alt="Instagram Icon" />
			</p>
		</a>
	</div>
</section>
