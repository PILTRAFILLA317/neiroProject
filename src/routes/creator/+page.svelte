<script lang="ts">
	import VerticalList from '../../lib/components/dragAndDrop/VerticalList.svelte';
	import ComponentTreeView from '../../lib/components/dragAndDrop/ComponentTreeView.svelte';
	import TextLeftImageRight from '../../lib/components/webSections/welcomeComponents/TextLeftImageRight.svelte';
	import TextLeftImageLeft from '../../lib/components/webSections/welcomeComponents/TextLeftImageLeft.svelte';
	import DefaultNavBar from '../../lib/components/webSections/navBars/DefaultNavBar.svelte';

	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';

	let hex = $state('#091319');

	let selectedItem: any = $state(null);

	function inspectorClose() {
		selectedItem = "";
	}

	let menuItems = $state([
		{
			id: 1,
			name: 'Image Right',
			icon: '/TextWithImage.png',
			component: TextLeftImageRight,
			props: {
				title: 'Page Title',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et urna nunc. Mauris posuere dolor tortor.',
				imageUrl: '/image.png',
				button: { width: 128, height: 48, color: '#ff865b', text: 'Call to action' }
			}
		},
		{ id: 2, name: 'Image Left', icon: '/TextWithImageLeft.png', component: TextLeftImageLeft }
	]);

	let navBarItems = [
		{ id: 11, name: 'Default NavBar', icon: '/DefaultNavBar.png', component: DefaultNavBar }
	];

	let items: any[] = [];

	let { data }: { data: PageData } = $props();
</script>

<div class="w-screen h-screen">
	<div class="flex flex-row h-full">
		<div class="w-96 h-full pr-5">
			<div class="h-full bg-base-200 rounded-sm">
				<div class="p-4">
					<h1 class="text-2xl font-semibold tracking-wider text-base-neutral capitalize">
						Creator
					</h1>
				</div>
				<div class="divider mx-3"></div>
				<div class="pl-5">
					<h1 class="text-xl mb-3 font-bold">Global Settings</h1>
					<h2 class="mb-1 font-semibold">Backgroud Color</h2>
					<div class="flex flex-row items-center justify-start gap-2">
						<input
							type="color"
							class="rounded-none border-base-content h-8 w-10 block cursor-pointer"
							id="hs-color-input"
							title="Choose your color"
							bind:value={hex}
						/>
						<h3>
							{hex}
						</h3>
					</div>
				</div>
				<div class="divider mx-3"></div>
				<div class="p-0">
					<ComponentTreeView welcomeItems={menuItems} {navBarItems} />
				</div>
			</div>
		</div>
		<div class="w-full h-full py-5 pr-5">
			<div class="mockup-browser border border-base-300 h-full w-full shadow-2xl">
				<div class="mockup-browser-toolbar">
					<div class="input w-full">https://example.com</div>
				</div>
				<div class="bckground h-full" style="background-color: {hex};">
					<VerticalList
						itemClassName=""
						className="overflow-auto h-full"
						{items}
						on:itemSelected={(e) => (selectedItem = e.detail)}
					/>
				</div>
			</div>
		</div>
		{#if selectedItem}
			<div
				class="w-96 h-full"
				in:fly={{ x: 300, duration: 300 }}
				out:fly={{ x: 300, duration: 300 }}
			>
				<div class="h-full p-5 bg-base-200 rounded-sm">
					<div class="flex felx-row justify-between">
						<h1 class="text-2xl font-semibold tracking-wider text-base-neutral capitalize">
							Inspector
						</h1>
						<button onclick={inspectorClose}>
							<svg
								fill="#ffff"
								width="24"
								height="24"
								viewBox="0 0 256 256"
								id="Flat"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"
								/>
							</svg>
						</button>
					</div>
					<h2 class="text-lg font-medium mb-3">{selectedItem.name}</h2>
					{#each Object.entries(selectedItem.props) as [key, value]}
						<div class="flex flex-col">
							{#if key == 'title'}
								<div>
									<h2 class="block font-semibold mb-3">Title</h2>
									<input
										bind:value={selectedItem.props[key]}
										type="text"
										class="input input-accent"
									/>
								</div>
								<div class="divider"></div>
							{:else if key == 'description'}
								<div>
									<h2 class="block font-semibold mb-3">Description</h2>
									<textarea bind:value={selectedItem.props[key]} class="textarea textarea-accent"
									></textarea>
								</div>
								<div class="divider"></div>
							{:else if key == 'button'}
								<div>
									<h2 class="block font-semibold mb-3">Button</h2>
									<h3 class="mt-1">Width</h3>
									<input
										type="range"
										min="0"
										max="500"
										bind:value={selectedItem.props[key].width}
										class="range range-xs range-accent"
									/>
									<h3 class="mt-1">Height</h3>
									<input
										type="range"
										min="0"
										max="500"
										bind:value={selectedItem.props[key].height}
										class="range range-xs range-accent"
									/>
									<h3 class="mt-2">Color</h3>
									<div class="flex flex-row items-center gap-3">
										<input
											type="color"
											class="rounded-none border-base-content h-8 w-10 block cursor-pointer"
											id="hs-color-input"
											title="Choose your color"
											bind:value={selectedItem.props[key].color}
										/>
										<h2>{selectedItem.props[key].color}</h2>
									</div>
								</div>
								<div class="divider"></div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{:else}{/if}
	</div>
</div>
