<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="w-screen h-screen">
	<div class="flex flex-row h-full">
		<div class="w-96 h-full p-5">
			<div class="h-full bg-base-200 rounded-sm"></div>
		</div>
		<div class="w-full h-full py-10 pr-5">
			<div class="mockup-browser border border-base-300 h-full w-full shadow-2xl">
				<div class="mockup-browser-toolbar">
					<div class="input w-full">https://daisyui.com</div>
				</div>
			</div>
		</div>
	</div>
</div>
