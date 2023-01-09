<script lang="ts">
	export let items: { title: string; img: string }[];
	import Item from './item.svelte';
</script>

<ul
	class="slide flex h-full overflow-hidden px-20 md:px-36 lg:px-56 w-full flex-row justify-center sm:justify-between bg-secondary"
>
	{#each items as item, i}
		{#if i >= 1}
			<div class="m-2 hidden sm:block ">
				<Item {item} />
			</div>
		{:else}
			<div class="m-2 ">
				<Item {item} />
			</div>
		{/if}
	{/each}
</ul>

<style>
	.slide {
		flex: 1 0 100%;
	}
</style>
