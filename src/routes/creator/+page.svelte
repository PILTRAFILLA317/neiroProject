<script lang="ts">
	import VerticalList from '../../lib/components/dragAndDrop/VerticalList.svelte';
	import FixedVerticalList from '../../lib/components/dragAndDrop/FixedVerticalList.svelte';
	import ComponentTreeView from '../../lib/components/dragAndDrop/ComponentTreeView.svelte';
	import Board from '../../lib/components/dragAndDrop/Board.svelte';
	import TextLeftImageRight from '../../lib/components/webSections/welcomeComponents/TextLeftImageRight.svelte';
	import TextLeftImageLeft from '../../lib/components/webSections/welcomeComponents/TextLeftImageLeft.svelte';
	import DefaultNavBar from '../../lib/components/webSections/navBars/DefaultNavBar.svelte';

	import type { PageData } from './$types';
	import ColorPicker from 'svelte-awesome-color-picker';

	import { colord, Colord } from 'colord';

	let hex = $state('#091319');

	let menuItems = [
		{ id: 1, name: 'Image Right', icon: '/TextWithImage.png', component: TextLeftImageRight },
		{ id: 2, name: 'Image Left', icon: '/TextWithImageLeft.png', component: TextLeftImageLeft }
	];

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
				<div class="p-5">
					<ColorPicker
						isAlpha={false}
						bind:hex
						label="Background Color"
						--input-size="50px"
						position="responsive"
					/>
				</div>
				<div class="divider mx-3"></div>
				<div class="p-5">
					<h1 class="text-xl font-bold">Sections</h1>
				</div>
				<ComponentTreeView welcomeItems={menuItems} navBarItems={navBarItems}/>
			</div>
		</div>
		<div class="w-full h-full py-5 pr-5">
			<div class="mockup-browser border border-base-300 h-full w-full shadow-2xl">
				<div class="mockup-browser-toolbar">
					<div class="input w-full">https://example.com</div>
				</div>
				<div class="bckground h-full" style="background-color: {hex};">
					<VerticalList itemClassName="" className="overflow-auto h-full" {items} />
				</div>
			</div>
		</div>
	</div>
</div>

