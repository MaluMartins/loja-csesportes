import React from 'react';
import Products from "./Products";

export default function Data() {
    return (
        <>
            <div className="wrapper">
                <Products 
                img="https://picsum.photos/318/180"
                title="Camisa Ciclismo"
                description="Camisa para pedalar."
                />
                <Products 
                img="https://picsum.photos/318/180"
                title="Top Academia"
                description="Top para malhar."
                />
                <Products 
                img="https://picsum.photos/318/180"
                title="Bomba de ar"
                description="Bomba para pneu de bicicleta."
                />
                <Products 
                img="https://picsum.photos/318/180"
                title="Bomba de ar"
                description="Bomba para pneu de bicicleta."
                />
                <Products 
                img="https://picsum.photos/318/180"
                title="Bomba de ar"
                description="Bomba para pneu de bicicleta."
                />
            </div>
        </>
    )
}