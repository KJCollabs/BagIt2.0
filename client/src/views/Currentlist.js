import React, { useEffect, useState } from "react";
import AddBar from "../components/AddBar";
import Department from "../components/department";
import Auth0ProviderWithHistory from "../auth0-provider-with-history";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function Currentlist() {
  const { user } = useAuth0();
  const [array, setArray] = useState([1]);
  const [categories, setCategories] = useState([]);
  const [dropDownValue, setDropDownValue] = useState("");
  const [item, setItem] = useState("");
  useEffect(() => {
    API.getAllCategories().then((results) => {
      setCategories(results.data.categories);
    });
  }, []);
  useEffect(() => {
    API.getAllItems()
      .then((res) => setArray(res.data.items))
      .catch((err) => console.log(err));
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
    const id = dropDownValue.split(". ")[0];
    const newItem = {
      categoryId: id,
      item: item,
      user: user.name,
      email: user.email,
    };
    API.createItem(newItem).then((results) => {
      API.getAllItems().then((response) => {
        console.log(response.data.items);
        setArray(response.data.items);
        setItem("");
      });
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
        <Department array={array} />;
      </Auth0ProviderWithHistory>
    </div>
  );
}
export default Currentlist;
