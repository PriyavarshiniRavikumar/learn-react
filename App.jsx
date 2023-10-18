import React, { useEffect, useState } from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { id: uuidv4(), title: title };
    const newTitles = [...titles, data];
    setTitles(newTitles);
    saveToLocal(newTitles); // Save the data to local storage
    setTitle("");
  };

  useEffect(() => {
    getFromStorage(); // Load the data from local storage
  }, []);
  
  
  function saveToLocal(newTitles) {
    localStorage.setItem("my-titles", JSON.stringify(newTitles));
  }

  function UpdateCard(id, updatedTitle) {
    const findIndex = titles.findIndex((obj) => obj.id === id);
    const updatedItems = [...titles];
    updatedItems[findIndex] = {
      ...updatedItems[findIndex],
      title: updatedTitle,
    };
    setTitles(updatedItems);
  }

  function deleteCard(id) {
    const filterArray = titles.filter((check) => check.id !== id);
    setTitles(filterArray);
  }

  function getFromStorage() {
    const storedTitles = JSON.parse(localStorage.getItem("my-titles"));
    if (storedTitles) {
      console.log("hi");
      setTitles(storedTitles);
    }
  }

  return (
    <div className="total-container">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <Input
            label="Title"
            type="text"
            id="1"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Button type="submit" name="Add" />
        </div>
      </form>
      <div className="grid">
        {titles.map((item, index) => {
          return (
            <div key={index}>
              <Card
                values={item}
                deleteCard={() => deleteCard(item.id)}
                UpdateCard={(updatedTitle) => UpdateCard(item.id, updatedTitle)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;