<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone, TRIGGERS, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let className = '';
	export let items: { id: number; name: string; component: any; props: any[] }[];
	export let onDrop: (items: { id: number; name: string; component: any; props: any[] }[]) => void;
	const flipDurationMs = 150;

	function handleDndConsider(e: CustomEvent) {
		items = e.detail.items;
	}
	function handleDndFinalize(e: CustomEvent) {
		// console.log('finalize', e.detail.items[e.detail.items.length - 1]);
		// items = e.detail.items;
		const { items: newItems } = e.detail;
		// optimistic update for smooth UX
		items = newItems;
		// sending to top level for saving
		onDrop([...newItems]);
	}
	function handleClick(e: MouseEvent, item: { id: number; component: any }) {
		dispatch('itemSelected', item);
	}
</script>

<section
	class={className}
	use:dndzone={{
		items,
		flipDurationMs,
		dropTargetStyle: { outline: '0px' },
		transformDraggedElement: (element, data, index) => {
			if (element) {
				element.style.backgroundColor = '#cccccc';
				element.style.opacity = '0.3';
				[...element.children].forEach((child) => ((child as HTMLElement).style.display = 'none'));
				// element.innerHTML = '';
			}
		}
	}}
	onconsider={handleDndConsider}
	onfinalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div
			class="relative bg-bottom h-auto w-auto"
			onclick={(e) => handleClick(e, item)}
			animate:flip={{ duration: flipDurationMs }}
		>
			<svelte:component this={item.component} props={item.props} />
			{#if item[SHADOW_ITEM_MARKER_PROPERTY_NAME]}
				<div
					in:fade={{ duration: 200, easing: cubicIn }}
					class="absolute top-0 left-0 right-0 bottom-0 visible border-2 border-gray-200 bg-blue-100 opacity-20 m-0"
				></div>
			{/if}
		</div>
	{/each}
</section>
