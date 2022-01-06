import { Cocktails } from "../../type";
import { useParams } from 'react-router-dom';
import styles from "./Detail.module.css";
import { useState } from "react";


interface ParamTypes {
    detailName: string
}

interface DetailProps {
    cocktail: Cocktails[]
}


const Detail = (props: DetailProps) => {
    const [appearance, setAppearance] = useState(true)
    let { detailName } = useParams<ParamTypes>();

    let gevonden = props.cocktail.find(item => item.strDrink.replace(/[' ',-,%,/,.,&]/g, '').toLowerCase() === detailName.replace(/[' ',-,%,/,.,&]/g, '').toLowerCase())


    const Save = () => {
        let item = JSON.parse(localStorage.getItem("key") || '[]');

        item.push(gevonden);

        localStorage.setItem("key", JSON.stringify(item));
        setAppearance(appearance => !appearance)
    }


    const Delete = (id: any) => {
        let item = JSON.parse(localStorage.getItem("key") || '[]');

        item.splice(item.findIndex((index: any) => index.id === id))


        localStorage.setItem("key", JSON.stringify(item))
        setAppearance(appearance => !appearance)
    }

    const checkLocalStorage = (id: number) => {
        let local = JSON.parse(localStorage.getItem("key") || '[]');

        var cocktail = local.find((obj: any) => obj.idDrink === id);

        return cocktail;
    }


    return (
        <div className={styles.container}>

            {gevonden ?
                <div className={styles.kleineContainer}>
                    <div><h1>{gevonden?.strDrink}</h1></div>
                    <div className={styles.imgDiv}><img className={styles.img} src={gevonden?.strDrinkThumb} alt="" /></div>
                    <div className={styles.container2}>
                        <h3>Ingrediënten</h3>
                        <ul className={styles.ingrediënten}>
                            <li>{gevonden?.strIngredient1}</li>
                            <li>{gevonden?.strIngredient2}</li>
                            <li>{gevonden?.strIngredient3}</li>
                            <li>{gevonden?.strIngredient4}</li>
                        </ul>
                        <h3>Bereiding</h3>
                        <p>{gevonden?.strInstructions}</p>
                    </div>

                    {!checkLocalStorage(gevonden.idDrink)
                        ? <div ><button onClick={() => Save()}>Add in favorites</button></div>
                        : <div ><button onClick={() => Delete(gevonden?.idDrink)}>Remove from favorites</button></div>}


                </div>
                : <div style={{ color: "slategray", fontWeight: "bolder", fontSize: 25, textAlign: "center", marginBottom: 100, }}>
                    <h5>Het spijt ons er is geen info over deze drank gevonden.</h5>
                    <img style={{ width: 80, height: 80 }} src="/sadEmoji.png" />
                </div>
            }

        </div>
    )
}


export default Detail;

