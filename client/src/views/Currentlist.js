import React, { useEffect, useState } from "react";
import AddBar from "../components/AddBar";
import Department from "../components/department";
import Auth0ProviderWithHistory from "../auth0-provider-with-history";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function Currentlist() {
	const { user } = useAuth0();
	const array = [1];
	const [categories, setCategories] = useState([]);
	const [dropDownValue, setDropDownValue] = useState("");
	const [item, setItem] = useState("");
	useEffect(() => {
		API.getAllCategories().then((results) => {
			setCategories(results.data.categories);
		});
	}, []);

	const changeValue = (event) => {
		const { name, value } = event.target;
		setDropDownValue(value);
	};
	const changeText = (event) => {
		const { name, value } = event.target;
		setItem(value);
	};

	const handleSave = (event) => {
		const id = dropDownValue.split(" ")[0];
		const newItem = {
			categoryId: id,
			item: item,
			user: user.name,
			email: user.email,
		};
		API.createItem(newItem).then((results) => {
			// console.log(results);
			//update state to render new stuff
			// window.location.reload();
		});
	};
	return (
		<div>
			<AddBar
				categories={categories}
				changeValue={changeValue}
				dropDownValue={dropDownValue}
				item={item}
				handleSave={handleSave}
				changeText={changeText}
			/>
			<Auth0ProviderWithHistory>
				{/* //map this department */}
				{array.map((DeptArray) => {
					return <Department key={DeptArray} />;
				})}
				{/* Array of departments. Map departments too. Look into props.*/}
			</Auth0ProviderWithHistory>
		</div>
	);
}
export default Currentlist;
