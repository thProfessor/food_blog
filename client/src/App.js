import { useContext, useEffect } from "react";
import FoodList from "./components/FoodList";
import Form from "./components/Form";
import Layout from "./components/Layout";

const App = () => {

  return (
    <Layout>
      <Form />
      <FoodList />
    </Layout>
  );
}

export default App;
