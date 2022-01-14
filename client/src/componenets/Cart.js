import React from "react";

function Cart({ cart, setCart }) {
  let total = 0;
  cart.forEach((item) => {
    total += item.Price;
  });

  console.log(total);
  return (
    <>
      <div className="row">
        {cart.map((v) => {
          return (
            <div className="col-2 ms-3 mt-3 mb-3 me-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={v.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{v.Title}</h5>
                  <p className="card-text">{v.Price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">Total PRICE:{total}</div>
    </>
  );
}

export default Cart;
