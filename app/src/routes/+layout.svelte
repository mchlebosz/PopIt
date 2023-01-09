<script>
	export const prerender = true;

	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<div class="parallax">
	<Header />
	<slot />
	<div id="footer" class="parallax__group h-10">
		<Footer />
	</div>
</div>

<style lang="postcss">
	.parallax {
		perspective: 100px;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
	}
	.parallax__group {
		position: relative;
		height: auto;
		transform-style: preserve-3d;
	}
	#footer {
		z-index: 10;
	}
</style>
