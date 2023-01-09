<script lang="ts">
	export let group: { base: { component: any; name: string }; bgs: string[] };
</script>

<div class="parallax__layer parallax__layer--base z-10">
	<svelte:component this={group.base.component} />
</div>

{#each group.bgs as bg, i}
	{#if bg.startsWith('url(')}
		<div
			class="parallax__layer parallax__layer--back{i} object-contain bg-center  bg-contain bg-no-repeat  bg-clip-padding bg-origin-border"
			style="background-image: {bg}"
		/>
	{:else}
		<div
			class="parallax__layer parallax__layer--back{i} object-contain bg-center  bg-contain bg-no-repeat  bg-clip-padding bg-origin-border"
			style="background-color: {bg}"
		/>
	{/if}
{/each}

<style>
	.parallax__layer {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.parallax__layer--base {
		transform: translateZ(0);
	}
	.parallax__layer--back0 {
		transform: translateZ(-100px) scale(2) translateY(-10%);
		z-index: -20;
	}
	@media (min-width: 768px) {
		.parallax__layer--back0 {
			transform: translateZ(-150px) scale(2.1) translateY(130px);
		}
	}
	.parallax__layer--back1 {
		transform: translateZ(-160px) scale(1.8);
	}
	.parallax__layer--back2 {
		transform: translateZ(-180px) scale(2.4) translateY(-10px);
	}
</style>
