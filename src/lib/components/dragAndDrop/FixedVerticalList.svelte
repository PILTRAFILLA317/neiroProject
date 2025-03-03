<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone, TRIGGERS, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';

	export let className = '';

	export let items: { id: number; name: string }[];
	const flipDurationMs = 300;
	let shouldIgnoreDndEvents = false;

	function handleDndConsider(e: CustomEvent) {
		console.warn(`got consider ${JSON.stringify(e.detail, null, 2)}`);
		const { trigger, id } = e.detail.info;
		if (trigger === TRIGGERS.DRAG_STARTED) {
			console.warn(`copying ${id}`);
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
		console.warn(`got finalize ${JSON.stringify(e.detail, null, 2)}`);
		if (!shouldIgnoreDndEvents) {
			items = e.detail.items;
		} else {
			items = [...items];
			shouldIgnoreDndEvents = false;
		}
	}
</script>

<section
	class="outline-none shadow-none border-none border-gray-300 rounded-lg p-4"
	use:dndzone={{
		items,
		flipDurationMs,
		dropFromOthersDisabled: true,
		dropTargetStyle: { outline: '0px' }
	}}
	on:consider={handleDndConsider}
	on:finalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div animate:flip={{ duration: flipDurationMs }}>
			{item.name}
		</div>
	{/each}
</section>

<style>
	:global(*:focus) {
		outline: none;
		box-shadow: none;
	}
</style>
