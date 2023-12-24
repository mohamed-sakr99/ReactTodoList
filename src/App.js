import React, { Component } from "react";
import "./App.css";
import TodoItems from "./components/TodoItems/ToodItems";
import AddItems from "./components/AddItems/AddItems";

class App extends Component {
	state = {
		items: [
			{ id: 1, name: "mohamed", age: 20 },
			{ id: 2, name: "Ahmed", age: 25 },
			{ id: 3, name: "farouk", age: 29 },
		],
	};

	deleteItems = (id) => {
		let items = this.state.items;
		let i = items.findIndex((item) => item.id === id);
		items.splice(i, 1);
		this.setState({ items: items });
	};

	//Anothe Way To Delete Item
	// deleteItems = (id) => {
	// 	let Items = this.state.items.filter((item) => {
	// 		return item.id !== id;
	// 	});
	// 	this.setState({ Items });
	// };
	addItems = (item) => {
		item.id = Math.random();
		let items = this.state.items;
		items.push(item);
		this.setState({ items });
	};
	render() {
		return (
			<div className="App conatiner">
				<h1 className="text.center"> ToDoList App </h1>
				<TodoItems items={this.state.items} deleteItems={this.deleteItems} />
				<AddItems addItems={this.addItems} />
			</div>
		);
	}
}

export default App;
