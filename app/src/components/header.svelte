<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Nav from './nav.svelte';
	import Hamburger from './hamburger.svelte';

	onMount(() => {
		page.subscribe((value) => {
			const nav = document.querySelector('nav');
			if (!nav) return;
			const navLinks = nav.querySelectorAll('a');
			navLinks.forEach((link) => {
				if (link.id === String(value)) {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			});
		});
	});

	const subpages = [
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
	onMount(() => {
		const links = document.getElementById('logo');
		if (!links) return;

		// on hover, add a random color to the link
		links.addEventListener('mouseenter', () => {
			const randomColor = colors[Math.floor(Math.random() * colors.length)];
			links.style.color = randomColor.value;
		});

		// on mouseleave, remove the color
		links.addEventListener('mouseleave', () => {
			links.style.color = '';
		});
	});
</script>

<header
	class="flex flex-row justify-between m-0 px-8 py-4 align-baseline uppercase font-semibold bg-primary sticky top-0 z-10"
>
	<div class="logo h-full my-auto align-middle">
		<a
			id="logo"
			href="."
			rel="home"
			class="align-middle transition-all hover:drop-shadow hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px]"
			>pop it.com</a
		>
	</div>
	<Nav {subpages} />
	<Hamburger {subpages} />
</header>
