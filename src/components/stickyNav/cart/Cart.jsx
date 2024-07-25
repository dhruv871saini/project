import React from "react";
import { useCart } from "../../context/cartcontext";
import "./cart.css"
import { Link } from "react-router-dom";
const Cart = () => {
  const { increase, cart, decrease,deleteCart } = useCart();
  const addCart = () => {};
  // const increase = () => {};
  const checkout=()=>{
  // Set
  }
  return (
    <div>
      <button
        className="btn "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
      <CartLogo/>
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Offcanvas right
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          {cart.map((item, index) => (
            <div className="container-fluid border pb-3" key={index}>
              <div className="row">
                <div className="col-md-5">
                  <div class="d-flex">
                  <div><button
                    className="btn"
                    onClick={() => {
                      increase(index);
                    }}
                  >
                    <Add />
                  </button>
                  <div className="">{item.quantity}</div>
                  <button
                    className="btn"
                    onClick={() => {
                      decrease(index);
                    }}
                  >
                    <Subtract />
                  </button></div>
                  <div className="cart-image"><img className="w-100" src={item.image} alt="" /></div>
                  </div>

                </div>
                <div className="col-md-7 d-flex ">
                  <div>
                  <div class="">{item.title}</div>
                  <div class="">{item.price}&nbsp;*&nbsp;{item.quantity}</div>
                  <div class="text-danger">${item.price*item.quantity}</div>
                  </div>
                  <div >
                  <button className="btn" onClick={()=>{deleteCart(index)}}>
                    <Delte/>
                  </button>

                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <div class="  sticky-bottom text-center my-3 ">
           <div className="bg-danger my-1"> <button className="btn btn-danger  btn btn-danger" onClick={()=>{checkout()}}>
            CheckOut Now $ {
              (cart.reduce((acc, item) => acc + item.price * item.quantity, 0)).toFixed(2)
            }
            </button> </div>
            <div className="bg-danger my-1">
            <button className="btn btn-danger my-1" >
            <Link to="/cart">View Cart</Link>
            
            </button>
          </div>
          </div>
      </div>
      
    </div>

  );
};

export default Cart;

const Add = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#ae1e1e"
      fill="none"
    >
      <path
        d="M12 8V16M16 12L8 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </svg>
  );
};
const Subtract = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#ab2d2d"
      fill="none"
    >
      <path
        d="M16 12H8"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    </svg>
  );
};
const Delte=()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ae1e1e" fill="none">
    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M9 11.7349H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M10.5 15.6543H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>)
}
const CartLogo=()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
    <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
    <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
</svg>
  )
}