<script lang="ts">
	import '../app.css';
	import Hero from '../components/hero.svelte';
	import Middle from '../components/middle.svelte';
	import Ending from '../components/ending.svelte';

	import { base } from '$app/paths';

	import Group from '../components/pgroup.svelte';
	const groups = [
		{
			base: { component: Hero, name: 'hero' },
			bgs: [
				'url(' + base + '/images/mainPopIt.webp)',
				'url(' + base + '/images/shadow.webp)',
				'#ffbf69'
			]
		},
		{ base: { component: Middle, name: 'what' }, bgs: [] },
		{ base: { component: Ending, name: 'ending' }, bgs: ['url(' + base + '/images/bg-grid.webp)'] }
	];

	const updateDistance = () => {
		let group2 = document.getElementById('group2');
		if (!group2) return;
		let height = window.innerHeight * 1.7;
		let width = window.innerWidth * 0.001 + 1;
		if (window.innerWidth >= 640) {
			width = window.innerWidth * 0.0002 + 1.3;
		}
		if (window.innerWidth >= 768) {
			width = window.innerWidth * 0.0004 + 2;
		}
		if (window.innerWidth >= 1280) {
			width = window.innerWidth * 0.0004 + 1.7;
		}

		let ratio = height / width;

		group2.style.height = String(ratio) + 'px';
	};

	onMount(() => {
		updateDistance();
		window.addEventListener('resize', updateDistance);
	});

	import { onMount } from 'svelte';
</script>

{#each groups as group, i}
	<section id="group{i}" class="parallax__group">
		<Group {group} />
	</section>
{/each}

<style lang="scss">
	.parallax__group {
		position: relative;
		height: auto;
		height: 100vh;
		transform-style: preserve-3d;
	}
	#group0 {
		z-index: 3;
	}
	#group1 {
		z-index: 9;
	}
	#group2 {
		z-index: 2;
		height: 110vh;
	}
	#group3 {
		z-index: 9;
	}
</style>
