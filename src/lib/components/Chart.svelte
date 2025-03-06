<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
  
    export let options: ApexCharts.ApexOptions;
    export let series: ApexAxisChartSeries;
  
    let chart: ApexCharts | null = null;
    let chartContainer: HTMLDivElement;
  
    onMount(async () => {
      // 1. Dynamic import (client-side only)
      const ApexCharts = (await import('apexcharts')).default;
  
      // 2. Guard clause for required properties
      if (!options?.chart?.type) {
        throw new Error('Missing chart type in options');
      }
  
      // 3. Initialize with merged config
      chart = new ApexCharts(chartContainer, {
        ...options, // Spread options to top-level
        series      // Series must be at the root
      });
  
      chart.render();
    });
  
    onDestroy(() => {
      chart?.destroy();
    });
  </script>
  
  <div bind:this={chartContainer}></div>