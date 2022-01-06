import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./Favorites.module.css";
import { Cocktails } from "../../type";

const Favorites = () => {
  const [value, setValue] = useState<Cocktails[]>([]);


  const getSaveValue = () => {
    let item = JSON.parse(localStorage.getItem("key") || '[]');
    setValue(item)
  }

  const Delete = (id: any) => {
    window.location.reload();
    let item = JSON.parse(localStorage.getItem("key") || '[]');
    item.splice(item.findIndex((index: any) => index.id === id))
    localStorage.setItem("key", JSON.stringify(item))
  }

  useEffect(() => {
    getSaveValue();
  }, [])

  return (
    <div className={styles.container}>
      <div><h1>You'r favorites cocktails</h1></div>
      <div className={styles.kleineContainer}>

        {value.length > 0 ?  value.map((item) =>
          <div className={styles.middelGrotContainer}>
            <Link to={`./cocktail/${item.strDrink}`}>
              <div className={styles.miniContainer}>
                <div className={styles.imgDiv}><img className={styles.img} src={item.strDrinkThumb} alt={item.strDrink} /></div>
                <div className={styles.text}>{item.strDrink}</div>
              </div>
            </Link>
            <div><button className={styles.btn} onClick={() => Delete(item.idDrink)}>Remove from favorites</button></div>
          </div>
        ) : <div className={styles.empty}><h1>You have saved nothing yet in the favorites</h1></div>}

      </div>
    </div>

  )
}

export default Favorites;