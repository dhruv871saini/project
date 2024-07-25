import React from 'react'
import Element from './Element'
import Cart from './cart/Cart'

const StickyNav = () => {
  return (
    <div>
       <div className="d-flex flex-wrap justify-content-between sticky-top mt-3 bg-warning">
        <div class="m-3"><Element /></div>
        <div class="m-3"><Cart/></div>
      </div>
    </div>
  )
}

export default StickyNav
