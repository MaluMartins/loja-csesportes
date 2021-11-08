import React from 'react';
import data from './components/data';
import Products from "./components/Products";
import "./App.css"

function App() {

  return (
    <>
      <div className="container">
        <h1>Produtos</h1>
        {data.map(produto => (
          <Products 
          key={produto.title}
          title={produto.title}
          description={produto.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;