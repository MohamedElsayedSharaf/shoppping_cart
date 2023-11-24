import { Button } from "@mui/material";
import { CartItemType } from "../App";
import { Wrapper } from "./Item.styles";
import React from "react";

type props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;   
}

const Item: React.FC<props> = ({item, addToCart}) => (
    <Wrapper>
        <img src={item.image} alt="" />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => addToCart(item)}>Add To Cart</Button>
    </Wrapper>
)
export default Item