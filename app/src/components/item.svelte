<script lang="ts">
	export let item: { title: string; img: string };

	import { onMount } from 'svelte';

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
		const links = document.querySelectorAll<HTMLElement>('.carousel-item button');
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

<div class="flex carousel-item flex-col justify-between align-middle">
	<img src={item.img} alt={item.title} class="h-20 sm:h-24 md:h-32 aspect-square mx-auto" />
	<h3 class="text-center text-md my-2 md:my-4 font-semibold">{item.title}</h3>
	<button
		class="bg-primary p-1 px-3 rounded-lg uppercase drop-shadow-lg font-semibold transition-all hover:drop-shadow  hover:-translate-x-[1px] hover:-translate-y-[1px]"
	>
		<a href="shop">Buy Now</a>
	</button>
</div>
