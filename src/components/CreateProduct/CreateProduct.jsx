import React from 'react'
import ProductForm from './ProductForm'

function CreateProduct() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    <form>
                        <ProductForm />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct