<script>
	import { deleteTodo, toggleComplete, editTodo } from '../../store/TodoStore';

	export let todo;

	$: completeClass = todo.complete ? 'bg-green-three' : 'bg-leaf-one';
</script>

<div class="flex items-center justify-between rounded-md border-2 border-gray-one px-5 py-4">
	<div class="flex w-full max-w-lg items-center justify-start">
		<label for={`${todo.id}-checkbox`} class="sr-only">Complete todo</label>
		<input
			id={`${todo.id}-checkbox`}
			type="checkbox"
			checked={todo.complete}
			on:change={() => toggleComplete(todo.id)}
			class="flex h-4 w-4 items-center justify-center rounded border border-gray-three bg-cream-four text-green-four focus:border-green-five focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-five data-[state=checked]:border-green-five data-[state=checked]:bg-green-five"
		/>
		<label for={`${todo.id}-text`} class="sr-only">Edit todo</label>
		<input
			id={`${todo.id}-text`}
			type="text"
			placeholder="Enter a todo"
			value={todo.text}
			on:blur={(e) => editTodo(todo.id, e.target.value)}
			class="ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed border-b-gray-two bg-cream-four px-0 pb-1 text-base font-normal text-gray-three placeholder:text-gray-two focus:border-gray-three focus:outline-none focus:ring-0"
		/>
		<span
			class="{completeClass} ml-5 hidden rounded-full py-0.5 px-2 text-sm font-normal text-gray-five md:block"
		>
			{todo.complete ? 'Complete' : 'In Progress'}
		</span>
	</div>
	<button
		class="group ml-4 flex items-center justify-center rounded-md bg-cream-four p-2 hover:bg-steel-one focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-five"
		type="button"
		on:click={() => deleteTodo(todo.id)}
	>
		<svg
			class="h-5 w-5 text-steel-three group-hover:text-gray-five"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#trash__a)">
				<path
					d="M24 6.4h8v3.2h-3.2v20.8a1.6 1.6 0 0 1-1.6 1.6H4.8a1.6 1.6 0 0 1-1.6-1.6V9.6H0V6.4h8V1.6A1.6 1.6 0 0 1 9.6 0h12.8A1.6 1.6 0 0 1 24 1.6v4.8Zm1.6 3.2H6.4v19.2h19.2V9.6Zm-7.338 9.6 2.83 2.829-2.263 2.262L16 21.462l-2.829 2.83-2.262-2.263 2.829-2.829-2.83-2.829 2.263-2.262L16 16.938l2.829-2.83 2.262 2.263-2.829 2.829ZM11.2 3.2v3.2h9.6V3.2h-9.6Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="trash__a">
					<path fill="#fff" d="M0 0h32v32H0z" />
				</clipPath>
			</defs>
		</svg>
	</button>
</div>
