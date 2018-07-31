import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import FileInput from './components/FileInput';

const TodoList = ({ editable, todos, edit, blur, remove, goTrue, change, val }) => {
	const todoNode = todos.map((todo) => {
		return (
			<Todo
				todo={todo}
				editable={editable}
				key={todo.id}
				edit={edit}
				blur={blur}
				goTrue={goTrue}
				change={change}
				val={val}
				remove={remove}
			/>
		);
	});
	return <ul>{todoNode}</ul>;
};

const Title = () => {
	return (
		<div>
			<div>
				<h1>Aplicatie faina</h1>
			</div>
		</div>
	);
};

const Todo = ({ editable, todo, edit, blur, goTrue, change, val, remove }) => {
	let aaa;
	let da;
	debugger;
	if (editable) {
		aaa = (
			<input
				onBlur={() => {
					blur(todo.id);
				}}
				onKeyDown={(e) => {
					if (e.keyCode === 13) {
						edit(todo.id, val);
					}
				}}
				onChange={change}
				defaultValue={todo.text}
				onClick={goTrue}
			/>
		);
	} else {
		aaa = <span onClick={goTrue}> {todo.text}</span>;
	}

	return (
		<li>
			{aaa}
			<br />>
			<button onClick={() => remove(todo.id)}>Delete</button>
		</li>
	);
};

const TodoForm = (params) => {
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
					params.addToDo(input.value);
					input.value = '';
				}}
			>
				New
			</button>
		</div>
	);
};

window.id = 0;
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [], isEditable: false, valoare: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.isEditable = this.isEditable.bind(this);
	}

	addToDo(val) {
		const todo = { text: val, id: window.id++ };
		this.state.data.push(todo);
		this.setState({ data: this.state.data });
	}

	handleRemove(id) {
		const remainder = this.state.data.filter((todo) => {
			if (todo.id !== id) return todo;
			return null;
		});
		this.setState({ data: remainder });
	}

	handleEdit(id, item) {
		let a;
		console.log(item);
		// const remains = this.state.data.find((wow) => {
		// 	if (wow.id === id) {
		// 		wow.text = item;
		// 		return wow;
		// 	}
		// 	return wow;
		// });

		this.state.data[id].text = item;
		this.setState({ data: this.state.data, isEditable: false });
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleChange1(event) {
		this.setState({ valoare: event.target.value });
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	isEditable() {
		return this.state.isEditable;
	}

	blur() {
		this.state.isEditable = false;
		this.setState({ isEditable: false });
	}

	goTrue() {
		this.state.isEditable = true;
		this.setState({ isEditable: true });
	}

	render() {
		return (
			<div>
				<Title />
				<TodoForm da="dasdsa" addToDo={this.addToDo.bind(this)} remove={this.handleRemove.bind(this)} />

				<TodoList
					todos={this.state.data}
					remove={this.handleRemove.bind(this)}
					editable={this.state.isEditable}
					blur={this.blur.bind(this)}
					goTrue={this.goTrue.bind(this)}
					edit={this.handleEdit.bind(this)}
					change={this.handleChange1.bind(this)}
					val={this.state.valoare}
				/>
				<Clock />
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
				<h1>{this.state.value}</h1>
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="grapefruit">Grapefruit</option>
					<option value="lime">Lime</option>
					<option value="coconut">Coconut</option>
					<option value="mango">Mango</option>
				</select>

				<FileInput />
			</div>
		);
	}
}

export default App;
