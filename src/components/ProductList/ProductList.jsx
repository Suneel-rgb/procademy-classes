import React from 'react'
import Products from './Products'


const products = [
    {
        pID: 1,
        pName: "Margarita",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry",
        isAvailable: true,
        image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
        price: 12
    },
    {
        pID: 2,
        pName: "Blue Margarita",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry",
        isAvailable: true,
        image: 'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg',
        price: 12
    },
    {
        pID: 3,
        pName: "Tommy's Margarita",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry",
        isAvailable: false,
        image: 'https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg',
        price: 12
    },
    {
        pID: 4,
        pName: "Whitecap Margarita",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry",
        isAvailable: true,
        image: 'https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg',
        price: 12
    },
    {
        pID: 5,
        pName: "Strawberry Margarita",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry",
        isAvailable: false,
        image: 'https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg',
        price: 12
    },
]

function ProductList() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 mx-auto'>
                    <ul className='list-group shadow list-unstyled'>
                        <Products
                            id={products[0].pID}
                            name={products[0].pName}
                            description={products[0].desc}
                            isAvailable={products[0].isAvailable}
                            imageUrl={products[0].image}
                            price={products[0].price}
                        />
                        <Products
                            id={products[1].pID}
                            name={products[1].pName}
                            description={products[1].desc}
                            isAvailable={products[1].isAvailable}
                            imageUrl={products[1].image}
                            price={products[1].price}
                        />
                        <Products
                            id={products[2].pID}
                            name={products[2].pName}
                            description={products[2].desc}
                            isAvailable={products[2].isAvailable}
                            imageUrl={products[2].image}
                            price={products[2].price}
                        />
                        <Products
                            id={products[3].pID}
                            name={products[3].pName}
                            description={products[3].desc}
                            isAvailable={products[3].isAvailable}
                            imageUrl={products[3].image}
                            price={products[3].price}
                        />
                        <Products
                            id={products[4].pID}
                            name={products[4].pName}
                            description={products[4].desc}
                            isAvailable={products[4].isAvailable}
                            imageUrl={products[4].image}
                            price={products[4].price}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductList