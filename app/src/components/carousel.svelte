<script lang="ts">
	import { base } from '$app/paths';

	const all_items = [
		[
			{ title: 'Among Us', img: base + '/images/amongus.webp' },
			{ title: 'Round', img: base + '/images/round.webp' },
			{ title: 'Square', img: base + '/images/square.webp' }
		],
		[
			{ title: 'Round', img: base + '/images/round.webp' },
			{ title: 'Square', img: base + '/images/square.webp' },
			{ title: 'Among Us', img: base + '/images/amongus.webp' }
		],
		[
			{ title: 'Square', img: base + '/images/square.webp' },
			{ title: 'Among Us', img: base + '/images/amongus.webp' },
			{ title: 'Round', img: base + '/images/round.webp' }
		]
	];
	import Slide from './slide.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const slidesContainer = document.getElementById('slides-container');
		const slide = document.querySelector('.slide');
		const prevButton = document.getElementById('slide-arrow-prev');
		const nextButton = document.getElementById('slide-arrow-next');
		try {
			if (slidesContainer && slide && prevButton && nextButton) {
				nextButton.addEventListener('click', () => {
					const slideWidth: number = slide.clientWidth;
					slidesContainer.scrollLeft += slideWidth;
				});

				prevButton.addEventListener('click', () => {
					const slideWidth = slide.clientWidth;
					slidesContainer.scrollLeft -= slideWidth;
				});
			}
		} catch (e) {
			console.log(e);
		}
	});
</script>

<div
	id="carousel"
	class="w-full bg-secondary flex flex-col justify-center align-middle p-12 pb-4 md:pb-12 px-4"
>
	<header class="text-center font-extrabold ">
		<h2>Try out Pop-It!</h2>
	</header>
	<article class="slider-wrapper relative overflow-hidden flex mt-8">
		<div
			id="slides-container"
			class="relative flex list-none m-0 p-0 w-full h-48 sm:h-60 overflow-hidden scroll-smooth -pb-2 "
		>
			{#each all_items as items}
				<Slide {items} />
			{/each}
		</div>
		<!-- Slider controls -->
		<button
			id="slide-arrow-prev"
			type="button"
			class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
		>
			<span
				class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary/70  group-hover:bg-primary group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
			>
				<svg
					aria-hidden="true"
					class="w-5 h-5 text-white sm:w-6 sm:h-6 "
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/></svg
				>
				<span class="sr-only">Previous</span>
			</span>
		</button>
		<button
			id="slide-arrow-next"
			type="button"
			class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
		>
			<span
				class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary/70  group-hover:bg-primary group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
			>
				<svg
					aria-hidden="true"
					class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5l7 7-7 7"
					/></svg
				>
				<span class="sr-only">Next</span>
			</span>
		</button>
	</article>
</div>
