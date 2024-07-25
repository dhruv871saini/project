import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { useDash } from "../context/dashcontext";
import Element from "../stickyNav/Element";
import "./home.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

import Cart from "../stickyNav/cart/Cart";
import { useCart } from "../context/cartcontext";
import StickyNav from "../stickyNav/StickyNav";

const Home = () => {
  const {addCart}=useCart();
  const { first, setfirst, second } = useDash();
  const addToCardData = (data) => {
    addCart(data);
    console.log(data);
  };

  const gotoProductDetail = (id) => {
    // Implement your logic to navigate to product detail
  };
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setfirst(res.data);
    });
  }, []);

  return (
    <div>
      <Slider />
  <div class="sticky-top">    <StickyNav/></div>
     
      {
        <div class="container-fluid text-center fs-2 text-primary">
          <marquee
            behavior="scroll"
            direction="left"
            className="skewed-container "
          >
            Here available {second} product
          </marquee>
        </div>
      }
      <div className="container-fluid m-uto ">
        <div className="row">
          <div className="col d-flex flex-wrap justify-content-center ">
            {first.map((item, index) => (
              <div
                className="col-md-3 mb-4  "
                key={index}
                style={{ paddingTop: "2%"  }}
              >
                <Card
                  raised
                  sx={{
                    maxWidth: 300,
                    margin: "0 auto",
                    padding: "0.1em",
                    
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="product"
                    height="200"
                    image={item.image}
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "20px" }}
                    >
                      {item.title.substring(0, 20)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description.substring(0, 60)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <input
                      type="submit"
                      value="Add To Cart"
                      className="btn btn-success"
                      onClick={() => {
                        addToCardData(item);
                      }}
                    />
                    <span style={{ marginLeft: "28%" }}>
                      <Button
                        variant="contained"
                        size="medium"
                        onClick={() => {
                          gotoProductDetail(item.id);
                        }}
                      >
                        View
                      </Button>
                    </span>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
