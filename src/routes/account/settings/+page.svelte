<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
	let { session, supabase, profile } = data;
</script>

<section class="flex h-full w-full items-center justify-center">
    <div class="rounded-sm shadow-2xl bg-base-100">
        <!-- <div class="hidden bg-cover lg:block lg:w-2/5" style="background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')">
        </div> -->

        <div class="p-12">
            <div class="w-full">
                <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                    Update your account settings
                </h1>

                <p class="mt-4 text-gray-500 dark:text-gray-400">
                    Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                </p>
                <form class="flex w-full flex-col gap-5 mt-8">
                    <div>
                        <label for="firstName" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                        <input id="firstName" type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-sm dark:placeholder-gray-600 dark:bg-base-300 dark:text-gray-300 dark:border-gray-700 focus:border-primary-content dark:focus:border-primary-content focus:ring-primaborder-primary-content focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
					<div class="flex flex-col gap-5 lg:flex-row">
						<div class="lg:w-1/2">
							<label for="phone" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
							<input id="phone" type="text" placeholder="XXX-XX-XXXX-XXX" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-sm dark:placeholder-gray-600 dark:bg-base-300 dark:text-gray-300 dark:border-gray-700 focus:border-primary-content dark:focus:border-primary-content focus:ring-primaborder-primary-content focus:outline-none focus:ring focus:ring-opacity-40" />
						</div>
					
						<div class="lg:w-1/2">
							<label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
							<input value={session.user.email} disabled id="email" type="email" placeholder="johnsnow@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-sm dark:placeholder-gray-600 dark:bg-base-300 dark:text-gray-300 dark:border-gray-700 focus:border-primary-content dark:focus:border-primary-content focus:ring-primaborder-primary-content focus:outline-none focus:ring focus:ring-opacity-40" />
						</div>
					</div>			
                    <button
                        class="flex items-center justify-between w-2/6 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-sm hover:bg-primaborder-primary-content focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Update</span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>