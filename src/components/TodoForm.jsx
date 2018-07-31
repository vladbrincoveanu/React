const TodoForm = ({ addToDo }) => {
	let input;
	return (
		<div>
			<input
				ref={(node) => {
					input = node;
				}}
			/>

			<button
				onClick={() => {
					addToDo(input.value);
					input.value = '';
				}}
			>
				New
			</button>
		</div>
	);
};
