import React,{ useEffect, useState } from "react";
import { Input, Button, Resultdiv } from "./components";
import "./App.css";

function App() {
  let [likes, setlikes] = useState([
    {
      id: 1,
      title: "books",
      //isUpdate:false,
    },
  ]);
  let [title, settitle] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    setlikes(() => {
      const data = {
        id: new Date().getTime(),
        title: title,
	//isUpdate:false,
      };
      return [...likes, data];
    });
    saveToLocal(likes);
    settitle("");
  };
  useEffect(() => {
getFromStorage();
    console.log(likes);
  }, []);
  const onDelete = (itemId) => {
    console.log("itemId", itemId);
    const filteredArray = likes.filter((l) => l.id !== itemId);
    console.log(filteredArray);
      setlikes(filteredArray)
      saveToLocal(filteredArray)
     console.log(likes)
  };
  
  const onUpdate=(itemId,updatedTitle)=>{
    const findIndextoUpdate=likes.findIndex((obj)=>obj.id===itemId);
  const updatedItems=[...likes];
updatedItems[findIndextoUpdate]={
...updateditems[findIndextoUpdate],
title:updatedTitle,
};
setlikes(updatedItems);
}

  function saveToLocal(newTitles) {
    localStorage.setItem("my-likes", JSON.stringify(newTitles));
  }


function getFromStorage() {
    const storedTitles = JSON.parse(localStorage.getItem("my-likes"));
    if (storedTitles) {
      console.log("hi");
      setlikes(storedTitles);
    }
  }


return (
    <>
      <form key="form" onSubmit={onsubmit}>
        <Input
          key="input"
          label="Likes:"
          name="likes"
          type="text"
          placeholder="Enter yout liked item"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        ></Input>
        <Button key="button" type="submit" name="Submit"></Button>
      </form>

      {likes.map((val) => {
        return (
          <div key={val.id}>
            <Resultdiv
              
              title={val.title}
              onDelete={() => onDelete(val.id)}
              onUpdate={(updatedTitle)=>onUpdate(val.id,updatedTitle)}
              
            ></Resultdiv>
          </div>
        );
      })}
    </>
  );
}

export default App;