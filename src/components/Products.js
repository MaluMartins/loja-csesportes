import React from 'react';

export default function Products({
   title,
   description
}) {
    return (
        <>
            <div className="product-card">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </>
    );
}
