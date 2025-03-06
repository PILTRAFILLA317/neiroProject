<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { ApexOptions } from 'apexcharts';

	let chartContainer: HTMLDivElement;
	let interacionChartContainer: HTMLDivElement;
	let chart: ApexCharts | null = null;
	let interacionChart: ApexCharts | null = null;
	let showDropdown = false;

	// Chart configuration
	const interacionChartOptions: ApexOptions = {
		chart: {
			type: 'area',
			height: '100%',
			toolbar: { show: false },
			zoom: { enabled: false }
		},
		dataLabels: { enabled: false },
		stroke: { curve: 'smooth', width: 2 },
		colors: ['#ff865b'], // DaisyUI primary color
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.3,
				stops: [0, 90, 100]
			}
		},
		xaxis: {
			categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			labels: { style: { colors: '#ff865b' } }
		},
		yaxis: { labels: { style: { colors: '#ff865b' } } },
		grid: { borderColor: '#94a1aa' }
	};

	// Chart configuration
	const options: ApexOptions = {
		chart: {
			type: 'area',
			height: '100%',
			toolbar: { show: false },
			zoom: { enabled: false }
		},
		dataLabels: { enabled: false },
		stroke: { curve: 'smooth', width: 2 },
		colors: ['#ff865b'], // DaisyUI primary color
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.3,
				stops: [0, 90, 100]
			}
		},
		xaxis: {
			categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			labels: { style: { colors: '#ff865b' } }
		},
		yaxis: { labels: { style: { colors: '#ff865b' } } },
		grid: { borderColor: '#94a1aa' }
	};

	const series = [
		{
			name: 'Users',
			data: [30, 40, 35, 50, 49, 60, 70]
		}
	];

	const interacionChartSeries = [
		{
			name: 'Reservas',
			data: [30, 40, 35, 50, 49, 60, 70]
		}
	];

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		chart = new ApexCharts(chartContainer, { ...options, series });
		interacionChart = new ApexCharts(interacionChartContainer, {
			...interacionChartOptions,
			series: interacionChartSeries
		});
		chart.render();
		interacionChart.render();
	});

	onDestroy(() => {
		chart?.destroy();
		interacionChart?.destroy();
	});
</script>

<section class="flex gap-5 h-full w-full items-center justify-center">
	<div class="max-w-sm w-full bg-base-100 rounded-lg shadow-sm p-4 md:p-6">
		<div class="flex justify-between">
			<div>
				<h5 class="leading-none text-3xl font-bold text-base-content pb-2">32.4k</h5>
				<p class="text-base font-normal text-neutral-content">Users this week</p>
			</div>
			<div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-success">
				12%
				<svg
					class="w-3 h-3 ms-1"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13V1m0 0L1 5m4-4 4 4"
					/>
				</svg>
			</div>
		</div>

		<!-- Chart Container -->
		<div bind:this={chartContainer} class="mt-4" />

		<div class="grid grid-cols-1 items-center border-base-200 border-t justify-between">
			<div class="flex justify-between items-center pt-5">
				<!-- Dropdown -->
				<div class="dropdown">
					<button
						class="text-sm font-medium text-neutral-content hover:text-base-content"
						on:click={() => (showDropdown = !showDropdown)}
						type="button"
					>
						Last 7 days
						<svg
							class="w-2.5 m-2.5 ms-1.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>
					{#if showDropdown}
						<div
							class="dropdown-content mt-2 z-10 bg-base-100 divide-y divide-base-200 rounded-lg shadow-sm w-44"
						>
							<ul class="py-2 text-sm">
								<li><a href="#" class="block px-4 py-2 hover:bg-base-200">Yesterday</a></li>
								<li><a href="#" class="block px-4 py-2 hover:bg-base-200">Today</a></li>
								<li><a href="#" class="block px-4 py-2 hover:bg-base-200">Last 7 days</a></li>
								<li><a href="#" class="block px-4 py-2 hover:bg-base-200">Last 30 days</a></li>
								<li><a href="#" class="block px-4 py-2 hover:bg-base-200">Last 90 days</a></li>
							</ul>
						</div>
					{/if}
				</div>

				<a
					href="#"
					class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-primary hover:text-primary-focus hover:bg-base-200 px-3 py-2"
				>
					Users Report
					<svg
						class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
	<div class="max-w-sm w-full bg-base-100 rounded-lg shadow-sm p-4 md:p-6">
		<div class="flex justify-between">
			<div>
				<h5 class="leading-none text-3xl font-bold text-base-content pb-2">32.4k</h5>
				<p class="text-base font-normal text-neutral-content">Users this week</p>
			</div>
			<div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-success">
				12%
				<svg
					class="w-3 h-3 ms-1"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13V1m0 0L1 5m4-4 4 4"
					/>
				</svg>
			</div>
		</div>

		<!-- Chart Container -->
		<div bind:this={interacionChartContainer} class="mt-4" />

		<div class="grid grid-cols-1 items-center border-base-200 border-t justify-between">
			<div class="flex justify-between items-center pt-5">
				<!-- Dropdown -->
				<div class="dropdown">
					<button
						class="text-sm font-medium text-neutral-content hover:text-base-content"
						on:click={() => (showDropdown = !showDropdown)}
						type="button"
					>
						Last 7 days
						<svg
							class="w-2.5 m-2.5 ms-1.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>
					{#if showDropdown}
						<div
							class="dropdown-content mt-2 z-10 bg-base-100 divide-y divide-base-200 rounded-lg shadow-sm w-44"
						>
							<ul class="py-2 text-sm">
								<li><a href="#" class="block px-4 py-2 hover:bg-base-200">Yesterday</a></li>
								<li><a href="#" class="block px-4 py-2 hover:bg-base-200">Today</a></li>
								<li><a href="#" class="block px-4 py-2 hover:bg-base-200">Last 7 days</a></li>
								<li><a href="#" class="block px-4 py-2 hover:bg-base-200">Last 30 days</a></li>
								<li><a href="#" class="block px-4 py-2 hover:bg-base-200">Last 90 days</a></li>
							</ul>
						</div>
					{/if}
				</div>

				<a
					href="#"
					class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-primary hover:text-primary-focus hover:bg-base-200 px-3 py-2"
				>
					Users Report
					<svg
						class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>
