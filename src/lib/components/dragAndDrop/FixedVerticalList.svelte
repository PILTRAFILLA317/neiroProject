<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone, TRIGGERS, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';

	export let className = '';

	export let items: { id: number; name: string, icon: string; component: any }[];
	const flipDurationMs = 300;
	let shouldIgnoreDndEvents = false;

	function handleDndConsider(e: CustomEvent) {
		// console.warn(`got consider ${JSON.stringify(e.detail, null, 2)}`);
		const { trigger, id } = e.detail.info;
		if (trigger === TRIGGERS.DRAG_STARTED) {
			// console.warn(`copying ${id}`);
			const idx = items.findIndex((item) => item.id === id);
			const newId = `${id}_copy_${Math.round(Math.random() * 100000)}`;
			// the line below was added in order to be compatible with version svelte-dnd-action 0.7.4 and above
			e.detail.items = e.detail.items.filter(
				(item: { [key: string]: any }) => !item[SHADOW_ITEM_MARKER_PROPERTY_NAME]
			);
			e.detail.items.splice(idx, 0, { ...items[idx], id: newId });
			items = e.detail.items;
			shouldIgnoreDndEvents = true;
		} else if (!shouldIgnoreDndEvents) {
			items = e.detail.items;
		} else {
			items = [...items];
		}
	}
	function handleDndFinalize(e: CustomEvent) {
		// console.warn(`got finalize ${JSON.stringify(e.detail, null, 2)}`);
		if (!shouldIgnoreDndEvents) {
			items = e.detail.items;
		} else {
			items = [...items];
			shouldIgnoreDndEvents = false;
		}
	}
</script>

<section
	class="border-none border-gray-300 rounded-lg p-1"
	use:dndzone={{
		items,
		flipDurationMs,
		dropFromOthersDisabled: true,
		dropTargetStyle: { outline: '0px' }
		// transformDraggedElement: (element) => {
		// 	element.style.backgroundColor = '#ffff';
		// }
	}}
	on:consider={handleDndConsider}
	on:finalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div animate:flip={{ duration: flipDurationMs }} class="tooltip tooltip-right flex flex-col">
			<div class="tooltip-content p-0 rounded-4xl">
				<div>
					<img alt="" class="rounded-2xl w-full" src={item.icon} />
				</div>
			</div>
			<div class="badge badge-md bg-base-300 w-full rounded-sm justify-start items-center p-4 m-1" >{item.name}</div>
		</div>
	{/each}
</section>

<style>
	:global(*:focus) {
		outline: none;
		box-shadow: none;
	}
</style>
