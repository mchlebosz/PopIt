<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	const colors = [
		{ key: 'blue', value: '#3b82f6' },
		{ key: 'red', value: '#ef4444' },
		{ key: 'green', value: '#10b981' },
		{ key: 'purple', value: '#8b5cf6' },
		{ key: 'pink', value: '#ec4899' },
		{ key: 'indigo', value: '#6366f1' },
		{ key: 'cyan', value: '#22d3ee' }
	];
	onMount(() => {
		const links = document.querySelectorAll<HTMLElement>('.hero-text button');
		links.forEach((link) => {
			// on hover, add a random color to the link
			link.addEventListener('mouseenter', () => {
				const randomColor = colors[Math.floor(Math.random() * colors.length)];
				link.style.backgroundColor = randomColor.value;
			});
			// on mouseleave, remove the color
			link.addEventListener('mouseleave', () => {
				link.style.backgroundColor = '';
			});
		});
	});
</script>

<div class="m-10 ml-10 md:ml-14 lg:ml-24 hero-text h-full">
	<div
		class="bg-transparent flex flex-col justify-between sm:justify-center h-full mb-20 pb-20 align-bottom"
	>
		<div class=" drop-shadow-lg ">
			<h1 class="uppercase text-white font-title text-7xl">Pop it!</h1>
			<h3 class="text-white">Super popits you can pop and probably do cool stuff with it!</h3>
		</div>

		<button
			class="bg-secondary px-8 py-2 w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 my-10 mb-16 rounded drop-shadow-lg transition-all hover:drop-shadow  hover:-translate-x-[1px] hover:-translate-y-[1px]"
		>
			<a href="{base}/shop" class="hover:drop-shadow-[2px_2px_2px_rgba(255,255,255,0.3)]">Buy Now</a
			>
		</button>
	</div>
</div>
