<script lang="ts">
	const subpages = [
		{ id: 'home', name: 'pop it!', href: '.' },
		{ id: 'about', name: 'about it!', href: 'about' },
		{ id: 'shop', name: 'shop it!', href: 'shop' },
		{ id: 'contact', name: 'contact it!', href: 'contact' }
	];

	const colors = [
		{ key: 'blue', value: '#3b82f6' },
		{ key: 'red', value: '#ef4444' },
		{ key: 'green', value: '#10b981' },
		{ key: 'purple', value: '#8b5cf6' },
		{ key: 'pink', value: '#ec4899' },
		{ key: 'indigo', value: '#6366f1' },
		{ key: 'cyan', value: '#22d3ee' }
	];

	import { onMount } from 'svelte';

	onMount(() => {
		const links = document.querySelectorAll<HTMLElement>('nav a');
		links.forEach((link) => {
			// on hover, add a random color to the link
			link.addEventListener('mouseenter', () => {
				const randomColor = colors[Math.floor(Math.random() * colors.length)];
				link.style.color = randomColor.value;
			});
			// on mouseleave, remove the color
			link.addEventListener('mouseleave', () => {
				link.style.color = '';
			});
		});
	});
</script>

<footer class="mt-auto w-full bg-zinc-700 text-white text-sm capitalize">
	<nav class="flex m-0 p-0 w-full">
		<ul class="flex w-full mx-auto my-2 justify-around align-middle  flex-col sm:flex-row">
			{#each subpages as page}
				<li
					class="m-auto my-2 first:font-semibold transition-all hover:drop-shadow-[2px_2px_2px_rgba(255,255,255,0.3)] hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px] "
				>
					<a href={page.href} class="text-white ">{page.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</footer>
