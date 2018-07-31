import React, { Component } from 'react';

class FileInput extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.fileInput = React.createRef();
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			file: null
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		alert(`Selected file - ${this.fileInput.current.files[0].name}`);
	}

	handleChange(event) {
		this.setState({
			file: URL.createObjectURL(event.target.files[0])
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Upload file:
					<input type="file" ref={this.fileInput} onChange={this.handleChange} />
				</label>
				<br />
				<button type="submit">Submit</button>
				<img src={this.state.file} />
			</form>
		);
	}
}

export default FileInput;
