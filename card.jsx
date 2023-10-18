import React, { useState } from "react";

const Card = ({ values, deleteCard, UpdateCard }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [updatedTitle, setUpdatedTitle] = useState(values.title);
  
    const handeleUpdateCard = () => {
        setIsEditing(true);
      };
      const handeleSaveCard = () => {
        UpdateCard(updatedTitle)
        setIsEditing(false);
      };

  return (
    <div className="card">
        { isEditing ?(<>
            <input type="text" placeholder="updated title" value={updatedTitle} onChange={(e)=>setUpdatedTitle(e.target.value)}/>
            <button onClick={handeleSaveCard}>Svae</button>
        </>

        ):(
            <>
      <h2 id={values.id}> {values.title}</h2>
      <button onClick={deleteCard}>delete</button>
      <button onClick={handeleUpdateCard}>Update</button>
      
      </>
      )
    }
    </div>
  );
};

export default Card;