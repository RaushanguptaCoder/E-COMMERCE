import React from "react";
import products from "./products.js";
import Card from "./Cards.jsx";

const Home = () => {
 return (
  <div className="flex justify-around flex-wrap gap-10 p-8">
   {products.map((product) => (
    <Card key={product.id} ObjProd={product} />
   ))}
  </div>
 );
};
export default Home;