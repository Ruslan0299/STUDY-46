import React from "react";
import style from "../scss/style.scss";
import iphone from "/assets/iphone.jpg";
import watch from "/assets/watch.jpg";
import foto from "/assets/no-foto.jpg";

function Product(props){

    const remove = () => {
        props.onRemove(props.id) 
    }

    return (
        
        <div className={style.product}>
            <div className={style.img}> <img src={props.image === "iphone" ? iphone : props.image === "watch" ? watch : foto }/> </div>
            <div className={style.body}>
                <h1 className={style.title}>{props.name}</h1>
                <div className={style.price}>{props.price}</div>
            </div>
            <button onClick={remove} type="button">Remove</button>
        </div>
    )
}

export default Product;