import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(items => setListings(items))
  }, [])
  
  const cardsList = listings.map(item => 
    <ListingCard 
      key={item.id}
      description={item.description}
      image={item.image}
      location={item.location}
    />
  )

  return(
  <main>
    <ul className="cards">
        {cardsList}
    </ul>
  </main>
  )
}

export default ListingsContainer;
