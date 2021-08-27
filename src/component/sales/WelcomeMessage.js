import React from "react";
import Modal from "../Modal";

const WelcomeMessage = props => {
  console.log(props);
  const heading = "Welcome To Your Dashboard";
  const create = "Create new product";
  const des_one = "Provide the product name";
  const des_two = "Provide the product cost price";
  const des_three = "Provide the product selling price";
  const des_four = "Provide the product Quantity";
  const des_five = "Select 'open sales' to record daily sales.";

  return (
    <div>
      <Modal
        title={heading}
        name={des_one}
        price={des_two}
        quantity={des_three}
        sales={des_four}
        open={des_five}
        create={create}
        removed='hidden'
        close={props.close}
      />
    </div>
  );
};

export default WelcomeMessage;
