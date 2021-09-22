import React from "react";
import Card from "../components/Card";
import CalculatorForm from "../components/CalculatorForm";

const MortgageCalcPage = () => {
  return (
    <section>
      <h1>Mortgage Calculator</h1>
      <Card>
        <CalculatorForm />
      </Card>
    </section>
  );
};

export default MortgageCalcPage;
