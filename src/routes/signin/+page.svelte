<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, SubmitFunction } from './$types.js';

	let { form }: { form: ActionData } = $props();

	let loading = $state(false);
	// const handleSubmit: SubmitFunction = () => {
	// 	loading = true;
	// 	return async ({ update }) => {
	// 		update();
	// 		loading = false;
	// 	};
	// };
	const handleSubmit: SubmitFunction = async ({ request, update }) => {
		loading = true;
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const response = await fetch('?/signin', {
			method: 'POST',
			body: JSON.stringify({ email, password })
		});
		const result = await response.json();
		update(result);
		loading = false;
	};
</script>

<!-- <form method="POST" action="?/signin">
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<button formaction="?/signin">Sign up</button>
	{#if form?.message !== undefined}
		<div class="success {form?.success ? '' : 'fail'}">
			{form?.message}
		</div>
	{/if}
</form> -->

<main class="flex h-screen w-screen flex-col items-center justify-center lg:px-8">
	<div
		class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-sm shadow-lg dark:bg-gray-800 lg:max-w-4xl"
	>
		<div
			class="hidden bg-cover lg:block lg:w-1/2"
			style="background-image: url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80');"
		></div>

		<form method="POST" action="?/signin" class="w-full px-6 py-8 md:px-8 lg:w-1/2">
			<div class="flex justify-center mx-auto">
				<img
					class="w-20 h-20"
					src="https://adispetrol.com.co/tracking/traking-pedidos/img/logo-default.svg"
					alt=""
				/>
			</div>

			<p class="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>
			<div class="mt-4">
				<label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
					>Email Address
					<input
						class="block w-full mt-2 px-4 py-2 text-gray-700 bg-white border rounded-sm dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
						type="email"
						name="email"
					/>
				</label>
			</div>
			<div class="mt-4">
				<label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
					>Password
					<input
						class="block w-full mt-2 px-4 py-2 text-gray-700 bg-white border rounded-sm dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
						type="password"
						name="password"
					/>
				</label>
				<div class="flex justify-end mt-2">
					<a class="text-xs text-gray-500 dark:text-gray-300 underline items-end"
						>Forget Password?</a
					>
				</div>
			</div>

			<div class="mt-6">
				<button
					formaction="?/signin"
					class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-sm hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
				>
					Sign In
				</button>
			</div>

			<div class="flex items-center justify-between mt-4">
				<span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

				<a href="/signup" class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
					>or sign up</a
				>

				<span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
			</div>
		</form>
	</div>
</main>
