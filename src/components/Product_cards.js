import React, { useEffect, useState } from "react";
import '../App.css';

export function ProductCards(props) {

  const product_list=
    {
  display: "flex",
  flexWrap: "wrap",
  padding: "2rem 2rem",
  width: "100%",
  justifyContent: "center",

};

  const [productList, setProductList] = useState([]);

useEffect(() => {
    fetchProductData();
  }, []);


  function fetchProductData() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProductList(json);
      });
  }


  function product_detail(json) {

    return json.map((product) => {
      const title = product.title;
      const description = product.description;

      return (
        <div className="product" >

          <div className="product-img">
            <img src={product.image} alt={title} />
          </div>

          <div className="product-content">

            <div className="product-title">
              <h2>{title.length > 20 ? title.substring(0, 20).concat('...') : title}</h2>
            </div>
            <div className="product-rating">
              <h4>Rating: {product.rating.rate}</h4>
              <h4>Count: {product.rating.count}</h4>
            </div>
            <div className="product-category">
              <h4>{product.category}</h4>
            </div>
            <div className="product-description">
              <p>{description.length > 80 ? description.substring(0, 80).concat('...more') : description}</p>
            </div>
            <div className="product-priceContainer">
              <h3 className="product-price">Price: ${product.price}</h3>
              <a href="#" data-product-ID={product.id} className="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
            </div>

          </div>

        </div>
      );
    });
  }


  return(
       
        <div className="container " style={product_list} >
         {product_detail(productList)}
        </div>   
    )

}
