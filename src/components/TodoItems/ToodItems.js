import React from "react";
import "./TodoItems.css";

const TodoItems = (props) => {
	const { items, deleteItems } = props;
	let length = items.length;
	const ListItems = length ? (
		items.map((item) => {
			return (
				<div key={item.id}>
					<span className="name">{item.name}</span>
					<span className="age">{item.age}</span>
					<span className="action icon" onClick={() => deleteItems(item.id)}>
						&times;
					</span>
				</div>
			);
		})
	) : (
		<p>No Items To Show</p>
	);
	return (
		<div className="ListItems">
			<div>
				<span className="name title">name</span>
				<span className="age title">age</span>
				<span className="icon title">action</span>
			</div>
			{ListItems}
		</div>
	);
};
export default TodoItems;
