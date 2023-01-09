<script>
	export const prerender = true;
	export const trailingSlash = 'always';
	export const ssr = false;

	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';

	import { onMount } from 'svelte';

	const scrollDisabler = () => {
		//document.body.style.overflow = 'hidden';

		// if in #paralla_container i will scroll under #footer, then unable that scroll by setting bottom of the scroll window to bottom of footer
		const footer = document.getElementById('footer');
		if (footer) {
			const footerRect = footer.getBoundingClientRect();
			const parallaxContainer = document.getElementById('parallax_container');
			if (parallaxContainer) {
				const parallaxContainerRect = parallaxContainer.getBoundingClientRect();
				if (footerRect.bottom < parallaxContainerRect.bottom) {
					//scroll to bottom of footer
					parallaxContainer.scrollTo(
						parallaxContainer.scrollLeft,
						parallaxContainer.scrollTop -
							Math.abs(footerRect.bottom - parallaxContainerRect.bottom) +
							1
					);
				}
			}
		}
	};

	onMount(() => {
		scrollDisabler();
		document.addEventListener('scroll', scrollDisabler, true);
	});
</script>

<div id="loading" class="absolute w-screen h-screen bg-primary z-50" />

<div id="parallax_container" class="parallax">
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
