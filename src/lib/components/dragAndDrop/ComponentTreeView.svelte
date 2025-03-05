<script lang="ts">
	import FolderSvg from '../../assets/FolderSvg.svelte';
	import FixedVerticalList from '../../../lib/components/dragAndDrop/FixedVerticalList.svelte';

	export let welcomeItems: { id: number; name: string; icon: string; component: any }[];
	export let navBarItems: { id: number; name: string; icon: string; component: any }[];
</script>

<ul class="menu menu-md bg-base-200 rounded-box max-w-xs w-full">
	<li>
		<details open>
			<summary> <h1 class="text-xl font-bold">Sections</h1> </summary>
			<ul>
				<li>
					<details open>
						<summary>
							<FolderSvg />
							Welcome
						</summary>
						<ul>
							<FixedVerticalList className="h-full" items={welcomeItems} />
						</ul>
					</details>
					<details open>
						<summary>
							<FolderSvg />
							Navbars
						</summary>
						<ul>
							<FixedVerticalList className="h-full" items={navBarItems} />
						</ul>
					</details>
				</li>
			</ul>
		</details>
	</li>
</ul>
