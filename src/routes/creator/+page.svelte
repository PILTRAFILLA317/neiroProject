<script lang="ts">
	import VerticalList from '../../lib/components/dragAndDrop/VerticalList.svelte';
	import FixedVerticalList from '../../lib/components/dragAndDrop/FixedVerticalList.svelte';
	import HorizontalList from '../../lib/components/dragAndDrop/HorizontalList.svelte';
	import Board from '../../lib/components/dragAndDrop/Board.svelte';
	import type { PageData } from './$types';

	let items2 = [
		{ id: 21, name: 'item21' },
		{ id: 22, name: 'item22' },
		{ id: 23, name: 'item23' },
		{ id: 24, name: 'item24' },
		{ id: 25, name: 'item25' }
	];

	let items1 = [
		{ id: 31, name: 'item31' },
	];

	let { data }: { data: PageData } = $props();
</script>

<div class="w-screen h-screen">
	<div class="flex flex-row h-full">
		<div class="w-96 h-full p-5">
			<div class="h-full bg-base-200 rounded-sm">
				<FixedVerticalList className="h-full" items={items2}/>
			</div>
		</div>
		<div class="w-full h-full py-5 pr-5">
			<div class="mockup-browser border border-base-300 h-full w-full shadow-2xl">
				<div class="mockup-browser-toolbar">
					<div class="input w-full">https://daisyui.com</div>
				</div>
				<div class="bg-base-200 h-full p-2">
					<VerticalList itemClassName="p-4 bg-base-100 rounded shadow mb-2" className="h-full" items={items1}/>
				</div>
			</div>
		</div>
	</div>
</div>
