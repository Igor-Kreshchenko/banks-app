import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import BanksManagementPage from "./pages/BanksManagementPage";
import MortgageCalcPage from "./pages/MortgageCalcPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <BanksManagementPage />
        </Route>
        <Route path="/calculator">
          <MortgageCalcPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
