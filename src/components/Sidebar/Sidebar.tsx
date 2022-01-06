import { Cocktails } from "../../type";
import { ThemeContext } from '../../App';
import { useContext, ChangeEventHandler } from 'react';
import { Link } from "react-router-dom";
import styles from "./Zijbalk.module.css";


interface SidebarProps {
    cocktail: Cocktails[]
}

const Sidebar = (props: SidebarProps) => {

    const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
        item2.callBackFunction(event.target.value)
    }

    const item2 = useContext(ThemeContext);

    let filter = props.cocktail.find(item => item.strDrink.replace(/[ ,/,.,&]/g, '').toLowerCase() === item2.callBackValue.replace(/[ ,/,.,&]/g, '').toLowerCase())
    console.log(item2)
    return (
        <div className={styles.container}>
            <input type="search" value={item2.callBackValue} onChange={handleSearch} placeholder="Search cocktail"/>

            {filter ? props.cocktail.filter((item) => item.strDrink.toLowerCase() === item2.callBackValue.toLowerCase()).map((item) =>

                <div key={item.idDrink}>
                    <Link to={`/home/${item.strDrink}`}>
                        <div className={styles.title} >{item.strDrink}</div>
                        <div><img alt="cocktail" className={styles.img} src={item.strDrinkThumb} /></div>
                    </Link>
                </div>
            ) 
          

            :
            <div>
            <div><img className={styles.cocktailsImg1} src="/cocktails.jpg" alt="" /></div>
            <div><img className={styles.cocktailsImg2} src="/mensen2.jpg" alt="" /></div>
        </div>
            
            }
        </div >





    )
}

export default Sidebar;

