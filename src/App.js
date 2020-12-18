import "./App.css";
import Home from "./stateless/home/Home";
import RecipeGenHome from "./stateless/recipeGenerator/RecipeGenHome";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <Route exact path="/" component={Home} />
      <Route path="/RecipeGenHome" component={RecipeGenHome} />
    </>
  );
}

export default App;
