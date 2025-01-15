import React from "react";
import Plus from "../../assets/plus.svg?react";
import Minus from "../../assets/minus.svg?react";

const AmountBtn = ({ amount, setAmount }) => {      
    const reduceAmount = () => {
        if (amount === 1) return;
        setAmount(amount - 1);  
    }

    const increaseAmount = () => {
        if (amount === 99) return;
        setAmount(amount + 1); 
    }

    return (
        <div className='amount-btn'>
            <Minus onClick={reduceAmount} />    
            {amount}
            <Plus onClick={increaseAmount} />
        </div>
    )
}

export default AmountBtn; 