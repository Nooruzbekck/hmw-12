import React, { useState } from 'react'
import Increment from './img/increment.png'
import Decrement from './img/decrement.png'
import styled from 'styled-components'
import classes from "./MealItem.module.css";

function CardButton(props) {
    const [total, setTotal] = useState(0)
    const [totalPrice, setTotalPrice] = useState(props.price);

    const incrementButton = () => {
        setTotal(total + 1)
        setTotalPrice((prev) => +prev + props.price)
        
    }
     const decrementButton = () => {
         if (total > 0) {
             setTotal(total - 1);
             setTotalPrice((prev) => +prev - props.price)
         }
       
     };
  return (
      <div>
     <MainDiv>
      <button onClick={decrementButton}>
        <Img src={Increment} alt="" />
      </button>
      <div>{total}</div>
      <button onClick={incrementButton}>
        <Img src={Decrement} alt="" />
      </button>
     </MainDiv>
      <P className={classes.price}>total : {Number(totalPrice).toFixed(2)}</P>
      </div>
  );
}

export default CardButton

const Img = styled.img`
    width: 30px;
    height: 30px;
`
const MainDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  position: relative;
  left: 750px;
`;
const P = styled.p`
  position: relative;
  left: 720px;
  top: 10px;
`;