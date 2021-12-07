import React from 'react';

export default function Products(props) {
    return(
        <div className="card">
            <div className="card-body">
                <img src={props.img}/>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.description}</p>
                <button className="card-btn">Comprar</button>
            </div>
        </div>
    )
}
