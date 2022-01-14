import React from "react";
import Items from "./Items";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router";
function Services({ counter, setCounter, cart, setCart }) {
  const temp = [];
  const History = useHistory();
  return (
    <>
      <div>
        <button
          className="btn btn-light"
          onClick={() => {
            History.push("/Cart");
          }}
        >
          <Badge
            color="secondary"
            badgeContent={counter}
            style={{ marginLeft: "1550px" }}
          >
            <ShoppingCartIcon />{" "}
          </Badge>
        </button>
      </div>
      <div className="row">
        {Items.map((b) => {
          return (
            <div
              className="card"
              style={{ width: "28rem", marginLeft: "200px" }}
            >
              <img src={b.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{b.Title}</h5>
                <p className="card-text">{b.Price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const temp = [...cart];
                    setCounter(counter + 1);
                    temp.push(b);
                    setCart(temp);
                    console.log(cart);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Services;
