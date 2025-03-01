<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, SubmitFunction } from '../signin/$types.js';

	let { form }: { form: ActionData } = $props();

	let loading = $state(false);
	// const handleSubmit: SubmitFunction = () => {
	// 	loading = true;
	// 	return async ({ update }) => {
	// 		update();
	// 		loading = false;
	// 	};
	// };
</script>

<form method="POST" action="?/signup">
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<button formaction="?/signup">Sign up</button>
	{#if form?.message !== undefined}
		<div class="success {form?.success ? 'hecho :D' : 'fail'}">
			{form?.message}
		</div>
	{/if}
</form>
