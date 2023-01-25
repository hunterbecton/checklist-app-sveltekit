import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export const todos = writable([]);

export const addTodo = () => {
	todos.update((currentTodos) => {
		const newTodos = [...currentTodos, { id: uuidv4(), text: '', complete: false }];
		return newTodos;
	});
};

export const deleteTodo = (id) => {
	todos.update((currentTodos) => {
		return currentTodos.filter((todo) => todo.id !== id);
	});
};

export const toggleComplete = (id) => {
	todos.update((currentTodos) => {
		const newTodos = currentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
		return newTodos;
	});
};

export const editTodo = (id, text) => {
	todos.update((currentTodos) => {
		const newTodos = currentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, text };
			}
			return todo;
		});
		return newTodos;
	});
};
