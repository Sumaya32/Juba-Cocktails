import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Cocktail from "./Pages/Category+Cocktails+Shared/CocktailsPage";
import { Cocktails } from "./type"
import Detail from "./Pages/Detail/Detail";
import React from 'react';
import Category from "./Pages/Category+Cocktails+Shared/Category";
import CategoryDetails from "./Pages/Category+Cocktails+Shared/CategoryDetails";
import Contact from "./Pages/Contact/Contact";
import Favorites from "./Pages/Favorites/Favorites";

export const ThemeContext = React.createContext({ callBackValue: "Niks is gevonden", callBackFunction: (param: string) => { } });


function App() {
  const [cocktailsArray, setCocktailsArray] = useState<Cocktails[]>([]);
  const [updating, setUpdating] = useState(true);
  const [search, setSearch] = useState('');

  const FetchFunctie = async () => {
    let array = [];
    for (let i = 48; i <= 122; i++) {
      if((i >= 48 && i <= 57) || i >= 97){
        let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + String.fromCharCode(i))
        let json = await response.json();

        if (json.drinks) {
          for (let j = 0; j < json.drinks.length; j++) {
            array.push(json.drinks[j])  ;
            console.log(json.drinks[j].strDrink);         
          }         
        }   
      }       
    }    
    setCocktailsArray([...array]); 
  }

  

  useEffect(() => {
    setUpdating(true);
    FetchFunctie();
    setUpdating(false);
  }, [])

  return (
    <ThemeContext.Provider value={{ callBackValue: search, callBackFunction: setSearch }}>
      <Router>
        <div>

          <Header />

          {updating
          ? <div className={styles.loaderContainer}><div className={styles.loader}></div></div> 
          : <div className={styles.container}>

              <Switch>

                <Route path="/category/:categoryDetailsNaam/:detailName" exact> <Detail cocktail={cocktailsArray} /> </Route>

                <Route path="/category/:categoryDetailsNaam" exact> <CategoryDetails cocktail={cocktailsArray} /> </Route>
                <Route path="/cocktail/:detailName" exact> <Detail cocktail={cocktailsArray} /> </Route>
                <Route path="/" exact> <Home cocktail={cocktailsArray} /> </Route>

                <Route path="/about"> <About /> </Route>
                <Route path="/cocktail"> <Cocktail cocktail={cocktailsArray} /> </Route>
                <Route path="/category"> <Category cocktail={cocktailsArray} /> </Route>
                <Route path="/home/:detailName" exact> <Detail cocktail={cocktailsArray} />  </Route>
                <Route path="/contact"> <Contact /> </Route>
                <Route path="/favorites"> <Favorites /> </Route>
              </Switch>
            </div>
          }
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
