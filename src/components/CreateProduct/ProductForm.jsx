import React, { useState } from 'react'

function ProductForm() {






    // ============= Approach One Using Multiple State Form
    // const [pName, setUpdateName] = useState('')
    // const [pPrice, setUpdatePrice] = useState('')
    // const [pDescription, setUpdateDescription] = useState('')
    // const [pAvailable, setUpdateAvailability] = useState('')
    // const [pImageUrl, setUpdateImageUrl] = useState('')


    // function nameInputHandler(event) {
    //     setUpdateName(event.target.value);
    // }
    // function priceInputHandler(event) {
    //     setUpdatePrice(event.target.value);
    // }
    // function descriptionInputHandler(event) {
    //     setUpdateDescription(event.target.value);
    // }
    // function availableInputHandler(event) {
    //     setUpdateAvailability(event.target.value);
    // }
    // function imageInputHandler(event) {
    //     setUpdateImageUrl(event.target.value);

    // }

    // ============= Approach Two Using Single State Form
    const [userInput, setUpdateUserInput] = useState({
        pName: '',
        pPrice: '',
        pDescription: '',
        pAvailable: '',
        pImageUrl: ''
    })

    function nameInputHandler(event) {
        setUpdateUserInput({ ...userInput, pName: event.target.value });
    }
    function priceInputHandler(event) {
        setUpdateUserInput({ ...userInput, pPrice: event.target.value });
    }
    function descriptionInputHandler(event) {
        setUpdateUserInput({ ...userInput, pDescription: event.target.value });
    }
    function availableInputHandler(event) {
        setUpdateUserInput({ ...userInput, pAvailable: event.target.value });
    }
    function imageInputHandler(event) {
        setUpdateUserInput({ ...userInput, pImageUrl: event.target.value });
    }

    return (
        <div className='card p-4 mb-4'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='mb-3'>
                        <label>Product Name</label>
                        <input type='text' id='name' className='form-control' placeholder='Product Name' onChange={nameInputHandler} />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='mb-3'>
                        <label>Product Price</label>
                        <input type='text' id='price' className='form-control' placeholder='Product Price' onChange={priceInputHandler} />
                    </div>
                </div>
            </div>
            <div className='col-lg-12'>
                <div className='mb-3'>
                    <label>Product Description</label>
                    <textarea type="text" id='description' className='form-control' placeholder='Product Description' onChange={descriptionInputHandler}></textarea>
                </div>
            </div>
            <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" id="isAvailable" onChange={availableInputHandler} />
                <label className="form-check-label" htmlFor="isAvailable">is product available in stock?</label>
            </div>
            <div className='mb-3'>
                <label>Select Product image</label>
                <input type='file' id='select-image' className='form-control' placeholder='Product Price' onChange={imageInputHandler} />
            </div>
            <div>
                <button type='submit' className='btn btn-primary'>Add Product</button>
            </div>
        </div>
    )
}

export default ProductForm