<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';

	export let className = '';
	export let itemClassName = '';
	export let items: { id: number; name: string }[];
	const flipDurationMs = 300;

	function handleDndConsider(e: CustomEvent) {
		items = e.detail.items;
	}
	function handleDndFinalize(e: CustomEvent) {
		items = e.detail.items;
	}
	function handleClick(e: MouseEvent, item: { id: number; name: string }) {
		alert(item.name);
	}
</script>

<section
	class={className}
	use:dndzone={{
		items,
		flipDurationMs,
		dropTargetStyle: { outline: 'rgba(166, 166, 166, 0.7) solid 2px' }
	}}
	onconsider={handleDndConsider}
	onfinalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div onclick="{(e) => handleClick(e, item)}" class={itemClassName} animate:flip={{ duration: flipDurationMs }}>
			{item.name}
		</div>
	{/each}
</section>
