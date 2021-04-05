import React from "react";
import "./Table.css";
import products from "../../data/products";

export default function ListProducts(props) {
  const list = products.map((product, i) => {
    return (
      <tr key={product.id} className={i % 2 === 0 ? "" : "Even"}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>$ {product.price.toFixed(2)}</td>
      </tr>
    );
  });

  return (
    <div className="TableProducts">
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
}
