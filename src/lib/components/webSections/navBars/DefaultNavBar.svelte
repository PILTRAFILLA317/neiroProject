<script lang="ts">
	export let props;
</script>

<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
		</div>
		<a class="btn btn-ghost text-xl">{props.title.text}</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a>Item 1</a></li>
			<li><a>Item 2</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<button
			class="btn"
			style="width:{props.button.width}px;
                        height:{props.button.height}px;
                        background-color: {props.button.color};
						border: none;
						border-radius: {props.button.round}px;
						color: {props.button.textColor};"
		>
			{props.button.text}</button
		>
	</div>
</div>
