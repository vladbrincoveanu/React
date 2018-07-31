const Todo = ({ todo, remove }) => {
	return (
		<li
			onClick={() => {
				remove(todo.id);
			}}
		>
			{todo.text}
		</li>
	);
};
