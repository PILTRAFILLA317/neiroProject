<script lang="ts">
    import { onMount } from 'svelte';

    export let selectedItem;
</script>

<h2 class="text-lg font-medium mb-3">{selectedItem.name}</h2>
{#each Object.entries(selectedItem.props) as [key, value]}
	<div class="flex flex-col">
		{#if key == 'title'}
			<div>
				<h2 class="block font-semibold mb-3">Title</h2>
				<input bind:value={selectedItem.props[key].text} type="text" class="input input-accent" />
			</div>
			<div class="divider"></div>
		{:else if key == 'description'}
			<div>
				<h2 class="block font-semibold mb-3">Description</h2>
				<textarea bind:value={selectedItem.props[key].text} class="textarea textarea-accent"></textarea>
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
                <h3 class="mt-1">Round</h3>
				<input
					type="range"
					min="0"
					max="100"
					bind:value={selectedItem.props[key].round}
					class="range range-xs range-accent"
				/>
				<h3 class="mt-2">Text Color</h3>
				<div class="flex flex-row items-center gap-3">
					<input
						type="color"
						class="rounded-none border-base-content h-8 w-10 block cursor-pointer"
						id="hs-color-input"
						title="Choose your color"
						bind:value={selectedItem.props[key].textColor}
					/>
					<h2>{selectedItem.props[key].textColor}</h2>
				</div>
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
				<h3 class="mt-2">Button text</h3>
				<input
					bind:value={selectedItem.props[key].text}
					type="text"
					class="input input-accent mt-1"
				/>
			</div>
			<div class="divider"></div>
		{:else if key == 'textColor'}
			<div>
				<h2 class="block font-semibold mb-3">Text Color</h2>
				<div class="flex flex-row items-center gap-3">
					<input
						type="color"
						class="rounded-none border-base-content h-8 w-10 block cursor-pointer"
						id="hs-color-input"
						title="Choose your color"
						bind:value={selectedItem.props[key]}
					/>
					<h2>{selectedItem.props[key]}</h2>
				</div>
			</div>
			<div class="divider"></div>
		{:else if key == 'imageUrl'}
			<div>
				<h2 class="block font-semibold mb-3">Image URL</h2>
				<input bind:value={selectedItem.props[key]} type="text" class="input input-accent" />
			</div>
			<div class="divider"></div>
		{:else}
			<p>{key}: {value}</p>
		{/if}
	</div>
{/each}
