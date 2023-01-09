<script lang="ts">
	export let subpages: { id: string; name: string; href: string }[];

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
		const links = document.querySelectorAll<HTMLElement>('nav li');
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

	//
</script>

<nav class="hidden sm:flex">
	<ul class="flex flex-row justify-between align-middle">
		{#each subpages as subpage}
			<li
				class="pl-10 transition-all hover:drop-shadow hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px] "
			>
				<a id={subpage.id} href={subpage.href}>{subpage.name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
</style>
