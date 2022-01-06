import { Cocktails } from "../../type";
import { Link } from "react-router-dom";
import styles from "./Shared.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";


interface CategoryProps {
    cocktail: Cocktails[]
}


const Category = (props: CategoryProps) => {

    let uniqueCategoryArray = props.cocktail.filter((element, index, self) =>

        index === self.findIndex(item => item.strCategory.replace(/[ ,-,_,%,/,.,&]/g, '').toLowerCase() === element.strCategory.replace(/[ ,-,_,%,/,.,&]/g, '').toLowerCase()))

    let allArray = [];

    for (let i = 0; i < uniqueCategoryArray.length; i++) {
        if (uniqueCategoryArray[i].strCategory === null) {
            allArray.push(uniqueCategoryArray[i])
        }
    }


    return (
        <>

            <div className={styles.container}>
                <Sidebar cocktail={props.cocktail} />
                <h1 className={styles.h1Text}> All Categories </h1>
                {uniqueCategoryArray ?

                    <div className={styles.littleContainer}>
                        {           
                            uniqueCategoryArray.map((item) => {
                                console.log("category " + item.strCategory)
                                return (

                                    <Link to={`/category/${item.strCategory?.replace(/[' ',-,_,%,/,.,&]/g, '').toLowerCase()}`}>
                                        <div key={item.idDrink} className={styles.miniContainer}>
                                            <div className={styles.effectContainer}>
                                                <div className={styles.imgDiv} > <img className={styles.img} alt={item.strCategory} src={item.strDrinkThumb} /> </div>
                                                < div className={styles.middle} > <div className={styles.text}>{item.strCategory} </div></div>
                                            </div>

                                        </div>
                                    </Link>

                                )
                            }
                            )
                        }
                    </div>

                    : <div style={{ color: "slategray", fontWeight: "bolder", fontSize: 25, textAlign: "center" }}>
                        Sorry There is no category been found. < img alt=":-)" src="./sadEmoji.png" />
                    </div>
                }

            </div>

        </>
    )
}

export default Category;

