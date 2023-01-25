<script>
	import { addTodo } from '../../store/TodoStore';
</script>

<section class="flex justify-between">
	<h3 class="text-xl font-bold text-gray-three">Checklist</h3>
	<button
		type="button"
		class="group flex items-center rounded-md border-cream-four bg-green-one px-6 py-3 text-lg font-semibold text-gray-five outline outline-2 outline-offset-2 outline-green-one hover:text-green-five focus-visible:text-green-five focus-visible:outline-green-five"
		on:click={addTodo}
	>
		Add Task
		<svg
			class="ml-3 h-4 w-4 text-gray-five group-hover:text-green-five group-focus-visible:text-green-five"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#add__a)">
				<path
					d="M14.4 14.4V8h3.2v6.4H24v3.2h-6.4V24h-3.2v-6.4H8v-3.2h6.4ZM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Zm0-3.2a12.8 12.8 0 1 0 0-25.6 12.8 12.8 0 0 0 0 25.6Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="add__a">
					<path fill="#fff" d="M0 0h32v32H0z" />
				</clipPath>
			</defs>
		</svg>
	</button>
</section>
