import React,{useState} from "react";

function Resultdiv({ title, onDelete,onUpdate }) {
const [isEditing, setIsEditing] = useState(false)
    const [updatedTitle, setUpdatedTitle] = useState(values.title);
  
    const onUpdate= () => {
        setIsEditing(true);
      };
      const handeleSaveCard = () => {
        UpdateCard(updatedTitle)
        setIsEditing(false);
      };

  return (
    <div className="resultdiv">
{ isEditing ?(<>
            <input type="text" placeholder="updated title" value={updatedTitle} onChange={(e)=>setUpdatedTitle(e.target.value)}/>
            <button onClick={handeleSaveCard}>Save</button>
        </>

        ):(
            <>

      <h4>{title}</h4>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onUpdate}>Update</button>
</>
)
}

    </div>
  );
}

export default Resultdiv;