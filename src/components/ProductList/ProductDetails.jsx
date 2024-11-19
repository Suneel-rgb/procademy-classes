import React, { useState } from 'react'
import Button from './Button';


const ProductDetails = (props) => {

    let badgeClass = 'badge-ml-40 badge ';
    badgeClass += props.isAvailable ? "bg-success" : "bg-danger";


    // let productCount = 0
    let [productCount, updateCount] = useState(0)

    function displayFormattedProductCount() {
        return productCount > 0 ? productCount : "Zero"
    }

    let incrementProductCount = function () {
        // productCount++;
        // console.log(productCount);
        updateCount(++productCount)

    }
    let decrementProductCount = function () {
        // productCount--;
        // console.log(productCount);
        updateCount(--productCount)

    }

    return (
        <div className='d-flex align-items-center justify-content-start mt-1' >
            <h6 className='fw-bold my-2 me-5'>${props.price}</h6>
            <Button eventHandler={decrementProductCount}>-</Button>
            <span>{displayFormattedProductCount()}</span>
            <Button eventHandler={incrementProductCount}>+</Button>
            <span className={badgeClass}>{props.isAvailable ? "Available" : "Unavailable"}</span>
        </div>
    )
}

export default ProductDetails