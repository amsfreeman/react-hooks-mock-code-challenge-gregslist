import React, {useState} from "react";

function ListingCard({description, image, location}) {
  const [liked, setLiked] = useState(false)
  function addLike() {
    setLiked(!liked)
  }

  function deleteListing(e) {
    console.log(e.target)
    fetch("http://localhost:6001/listings", 
      {method: "DELETE", 
      })
      .then(r => {
        if (r.ok) {
          console.log("DELETE")
        }
      })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button className="emoji-button favorite active" onClick={addLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={addLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={deleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
