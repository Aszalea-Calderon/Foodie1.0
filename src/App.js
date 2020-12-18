import "./App.css";
import Home from "./stateless/home/Home";
import RecipeGenHome from "./stateless/recipeGenerator/RecipeGenHome";
import { Route } from "react-router-dom";
import MyRecipes from "./stateless/myRecipes/MyRecipes";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/RecipeGenHome" component={RecipeGenHome} />
      <Route path="/MyRecipe" component={MyRecipes} />
    </>
  );
}

export default App;
