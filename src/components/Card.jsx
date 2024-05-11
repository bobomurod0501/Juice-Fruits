import React from "react";

class Card extends React.Component{
    render(){
        const{img, name, price} = this.props
        return(
                <div className="card">
                    <img src={img} alt="" />
                    <h2 className="fruit_name">{name}</h2>
                    <p className="definition">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,</p>
                    <h1>$ {price}</h1>
                    <button>VIEW PRODUCT</button>
                </div>
        )
    }
}
export default Card;