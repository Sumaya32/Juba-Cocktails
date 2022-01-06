import { Cocktails } from "../../type";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

interface HomeProps {
  cocktail: Cocktails[];
}

const Home = (props: HomeProps) => {
  return (
  
      <div className={styles.container}>

        <Sidebar cocktail={props.cocktail} />

          <h1 className={styles.h1Title}>Popular Cocktails</h1>
          <div className={styles.littleContainer} >
            {props.cocktail
              .filter((item, index) => index < 10)
              .map(item =>
                <Link to={`/cocktail/${item.strDrink}`}>
                  <div className={styles.miniContainer} >
                    <div className={styles.effectContainer}>
                      <div className={styles.imgDiv}><img alt={item.strDrink} className={styles.img} src={item.strDrinkThumb} /></div>
                      <div className={styles.middle}><div className={styles.text}> {item.strDrink}</div></div>
                    </div>
                  </div>
                </Link>
              )}
        </div>

    
          <h1 className={styles.h1Title}>Newest Cocktails</h1>
          <div className={styles.littleContainer} >
            {props.cocktail
              .filter((item, index) => index >= 10 && index < 20)
              .map(item =>
                <Link to={`./cocktail/${item.strDrink}`}>
                  <div className={styles.miniContainer} >
                    <div className={styles.effectContainer}>
                      <div className={styles.imgDiv}><img alt={item.strDrink} className={styles.img} src={item.strDrinkThumb} /></div>
                      <div className={styles.middle}><div className={styles.text}> {item.strDrink}</div></div>
                    </div>
                  </div>
                </Link>
              )}
          </div>
        </div>

 
  )
}

export default Home;