<script lang="ts">
	import VerticalList from '../../lib/components/dragAndDrop/VerticalList.svelte';
	import ComponentTreeView from '../../lib/components/dragAndDrop/ComponentTreeView.svelte';
	import TextLeftImageRight from '../../lib/components/webSections/welcomeComponents/TextLeftImageRight.svelte';
	import TextRightImageLeft from '../../lib/components/webSections/welcomeComponents/TextRightImageLeft.svelte';
	import DefaultNavBar from '../../lib/components/webSections/navBars/DefaultNavBar.svelte';
	import Inspector from '../../lib/components/Inspector.svelte';

	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';

	let hex = $state('#091319');

	let selectedItem: any = $state(null);

	function inspectorClose() {
		selectedItem = null;
	}

	let menuItems = $state([
		{
			id: 1,
			name: 'Image Right',
			icon: '/TextWithImage.png',
			component: TextLeftImageRight,
			props: {
				textColor: '#94a1aa',
				title: {
					text: 'Page Title',
					color: '#94a1aa',
					size: 32
				},
				description: {
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et urna nunc. Mauris posuere dolor tortor.',
					color: '#94a1aa',
					size: 16
				},
				imageUrl: '/image.png',
				button: {
					width: 128,
					height: 48,
					round: 48,
					color: '#ff865b',
					textColor: '#94a1aa',
					text: 'Call to action'
				}
			}
		},
		{
			id: 2,
			name: 'Image Left',
			icon: '/TextWithImageLeft.png',
			component: TextRightImageLeft,
			props: {
				textColor: '#94a1aa',
				title: {
					text: 'Page Title',
					color: '#94a1aa',
					size: 32
				},
				description: {
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et urna nunc. Mauris posuere dolor tortor.',
					color: '#94a1aa',
					size: 16
				},
				imageUrl: '/image.png',
				button: {
					width: 128,
					height: 48,
					round: 48,
					color: '#ff865b',
					textColor: '#94a1aa',
					text: 'Call to action'
				}
			}
		}
	]);

	let navBarItems = $state([
		{
			id: 11,
			name: 'Default NavBar',
			icon: '/DefaultNavBar.png',
			component: DefaultNavBar,
			props: {
				textColor: '#94a1aa',
				title: {
					text: 'Page Name',
					color: '#94a1aa',
					size: 32
				},
				imageUrl: '/image.png',
				button: {
					width: 124,
					height: 36,
					round: 12,
					color: '#ff865b',
					textColor: '#000000',
					text: 'Call to action'
				}
			}
		}
	]);

	let items = $state([]);
	let itemsToSave = $state([]);


	async function handleDrop(newItems: any) {
		console.log('NEW ITEMS', newItems);
		itemsToSave = newItems;
		items = newItems; // Asegúrate de que `items` también se actualice
	}

	async function savePage() {
		console.log('ITEMS', itemsToSave);
	}

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
				<div class="divider mx-3"></div>
				<div class="p-4">
					<button class="btn btn-accent w-full" onclick={savePage}>
						<div class="flex flex-row items-center justify-start gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-6 4h6m-6 4h6m-6-8h6m-6 4h6m-6 4h6M3 7l9 5-9 5V7z"
								/>
							</svg>
							<h1 class="text-lg font-semibold tracking-wider text-base-neutral capitalize">
								Preview
							</h1>
						</div>
					</button>
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
						className="overflow-auto h-full"
						{items}
						onDrop={handleDrop}
						on:itemSelected={(e) => (selectedItem = e.detail)}
					/>
				</div>
			</div>
		</div>
		{#if selectedItem}
			<div
				class="w-96 h-auto"
				in:fly={{ x: 300, duration: 300 }}
				out:fly={{ x: 300, duration: 300 }}
			>
				<div class="h-full p-5 bg-base-200 overflow-y-scroll rounded-sm">
					<div class="flex felx-row justify-between">
						<h1 class="text-2xl font-semibold tracking-wider text-base-neutral capitalize">
							Inspector
						</h1>
						<button onclick={inspectorClose} aria-label="Close inspector">
							<svg
								fill="#ffffff"
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
					<Inspector {selectedItem} />
				</div>
			</div>
		{:else}{/if}
	</div>
</div>
