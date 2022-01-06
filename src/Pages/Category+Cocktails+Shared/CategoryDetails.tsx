import { Cocktails } from "../../type";
import { useParams, Link } from 'react-router-dom';
import styles from "./Shared.module.css";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";


interface ParamTypes {
    categoryDetailsNaam: string
}

interface CategoryDetailsProps {
    cocktail: Cocktails[]
}

//Fetch category
const CategoryDetails = (props: CategoryDetailsProps) => {
    const [categoryDetails, setCategoryDetails] = useState<Cocktails[]>([]);

    let { categoryDetailsNaam } = useParams<ParamTypes>();

    const function1 = async () => {
        let itemCategory = [];
   
            let fetchen = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryDetailsNaam}`);
            let json = await fetchen.json();

            if (json.drinks !== null) {
                for (let j = 0; j < json.drinks.length; j++) {

                    if(props.cocktail.find(item => item.strDrink.replace(/[ ,-,_,%,/,.,&]/g, '').toLowerCase() === json.drinks[j].strDrink.replace(/[ ,-,_,%,/,.,&]/g, '').toLowerCase()))
                   { itemCategory.push(json.drinks[j]);}            
                }
            }
        
        setCategoryDetails([...itemCategory]);
    }

    useEffect(() => {
        function1();   
    },[])

    return (
        <>
            <div className={styles.container}>
            <Sidebar cocktail={categoryDetails} />
                <div className={styles.littleContainer}>
                    <h1 className={styles.h1Text}>Names of the cocktails from this category</h1>
                    {categoryDetails ?
                        categoryDetails.map((item) => {
                            console.log("van de category " + item.strDrink)
                            return (

                                <Link to={`/category/${categoryDetailsNaam}/${item.strDrink.replace(/[ ,-,%,/,.,&]/g, '')}`}>
                                    <div key={item.idDrink} className={styles.miniContainer}>

                                    <div className={styles.effectContainer}>
                                        <div className={styles.imgDiv}> <img className={styles.img}  alt={item.strDrink} src={item.strDrinkThumb} /></div>
                                        <div className={styles.middle}><div className={styles.text}>{item.strDrink}</div></div>
                                    </div>

                                    </div>
                                </Link>
                            )
                        })

                        : <div>Sorry, no drinks have been found</div>}
                </div>
            </div>
        </>
    )
}

export default CategoryDetails;

