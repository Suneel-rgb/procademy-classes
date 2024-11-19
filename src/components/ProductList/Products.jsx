import React from 'react'
import ProductDetails from './ProductDetails';


const Products = (props) => {
    return (
        <li className='list-group-item'>
            <div className='media align-items-lg-center flex-column flex-lg-row p-3 d-flex'>
                <div className='media-body order-2 order-lg-1'>
                    <h5 className='mt-0 fw-bold mb-2'>{props.name}</h5>
                    <p className='fst-italic text-muted mb-3 small'>
                        {props.description}
                    </p>
                    <ProductDetails price={props.price} isAvailable={props.isAvailable} />
                </div>
                <img src={props.imageUrl} alt='image' className='img-fluid order-1 order-lg-2 ms-5 rounded' width="200" />
            </div>
        </li>
    )
}

export default Products