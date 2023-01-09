<script lang="ts">
	export let subpages: { id: string; name: string; href: string }[];

	let showMenu = false;
	let submenuClass = 'translate-x-full hidden';
	function toggleNavbar() {
		if (!showMenu) {
			submenuClass = 'translate-x-full';
			window.setTimeout(function () {
				submenuClass = 'translate-x-0';
			}, 1);
		} else {
			submenuClass = 'translate-x-full';
			window.setTimeout(function () {
				submenuClass += ' hidden';
			}, 300);
		}
		showMenu = !showMenu;
	}
</script>

<nav class="flex sm:hidden">
	<!-- Mobile menu button -->
	<button
		on:click={toggleNavbar}
		type="button"
		class="relative flex w-0 h-0 p-4 rounded bg-white text-gray-800 hover:cursor-pointer hover:text-primary"
	>
		<span class="sr-only">Open main menu</span>
		<div
			class="block w-5 h-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2"
		>
			<div class="relative antialiased w-full h-0.5 top-1/2 -translate-y-1/2">
				<span
					aria-hidden="true"
					class="block absolute h-[3px] w-5 rounded antialiased bg-current transform transition duration-300 ease-in-out {showMenu
						? 'rotate-45'
						: '-translate-y-1.5'}"
				/>
				<span
					aria-hidden="true"
					class="block absolute  h-[3px] w-5 bg-current rounded antialiased   transform transition duration-300 ease-in-out {showMenu
						? 'opacity-0'
						: ''} "
				/>
				<span
					aria-hidden="true"
					class="block absolute  h-[3px] w-5 bg-current rounded antialiased transform  transition duration-300 ease-in-out {showMenu
						? '-rotate-45'
						: ' translate-y-1.5'}"
				/>
			</div>
		</div>
	</button>
	<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
	<div
		class="flex overflow-hidden absolute drop-shadow top-0 right-0 mt-16 mr-0 transition-transform duration-300  p-4 rounded-l-lg bg-white flex-col {submenuClass}"
	>
		<ul class="space-y-4">
			{#each subpages as subpage}
				<li
					class="transition-all hover:drop-shadow hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px]"
				>
					<a id={subpage.id} href={subpage.href}>{subpage.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
