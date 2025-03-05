<script lang="ts">
	export let props;
</script>

<div class="flex flex-col md:flex-row">
	<div class="md:w-1/2 flex items-center justify-center">
		<div class="text-center">
			<h1 class="text-4xl mb-4 font-bold">{props.title}</h1>
			<p class="text-lg mb-4 mx-44">{props.description}</p>
			<button
				class="btn"
				style="width:{props.button.width}px;
                        height:{props.button.height}px;
                        background-color: {props.button.color};"
			>
				{props.button.text}</button
			>
		</div>
	</div>
	<div class="md:w-1/2">
		<img
			src="https://www.garciafaura.com/wp-content/uploads/2018/11/Colombia-Centro-Empresarial-99-01.jpg"
			alt="Page Title"
			class="w-full h-auto"
		/>
	</div>
</div>
