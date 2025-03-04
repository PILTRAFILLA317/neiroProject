<script lang="ts">
	import VerticalList from '../../lib/components/dragAndDrop/VerticalList.svelte';
	import FixedVerticalList from '../../lib/components/dragAndDrop/FixedVerticalList.svelte';
	import HorizontalList from '../../lib/components/dragAndDrop/HorizontalList.svelte';
	import Board from '../../lib/components/dragAndDrop/Board.svelte';
	import TextLeftImageRight from '../../lib/components/webSections/TextLeftImageRight.svelte';
	// import TextWithImageRightImage from '/static/TextWithImage.png';

	import type { PageData } from './$types';
	import ColorPicker from 'svelte-awesome-color-picker';

	import { colord, Colord } from 'colord';

	let hex = $state('#091319');

	let menuItems = [
		{ id: 1, name: 'Welcome 1', icon: "/TextWithImage.png", component: TextLeftImageRight }
		// { id: 22, name: 'Contact Form', icon: '/icons/contact.svg' },
		// { id: 23, name: 'Gallery', icon: '/icons/gallery.svg' },
		// { id: 24, name: 'Testimonials', icon: '/icons/testimonials.svg' },
		// { id: 25, name: 'Footer', icon: '/icons/footer.svg' }
	];

	let items = [
		{ id: 11, name: 'Welcome 1', icon: "/TextWithImage.png", component: TextLeftImageRight }
	];

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
				<FixedVerticalList className="h-full" items={menuItems} />
			</div>
		</div>
		<div class="w-full h-full py-5 pr-5">
			<div class="mockup-browser border border-base-300 h-full w-full shadow-2xl">
				<div class="mockup-browser-toolbar">
					<div class="input w-full">https://daisyui.com</div>
				</div>
				<div class="bckground h-full" style="background-color: {hex};">
					<VerticalList itemClassName="" className="h-full" items={items} />
					<!-- <TextLeftImageRight /> -->
				</div>
			</div>
		</div>
	</div>
</div>
