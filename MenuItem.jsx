import React, {useState} from 'react'

function MenuItem({menu}) {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleClick = () => {
      setIsFavorite(!isFavorite);}

    return (
      <section className="itemContainer">
        <figure className="imgContainer">
         
          <img src={menu.foodImage} alt={menu.id} />
          <figcaption>
  
            <h2>{menu.itemName}</h2>

            <p>{menu.description}</p>
          </figcaption>
        </figure>

        <aside>{menu.price} EUR</aside>
  
        <button type="button" onClick={handleClick}>{!isFavorite?"🖤": "❤️"}
        </button>
      </section>
    );
  }
  
  export default MenuItem;