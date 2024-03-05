import { useState } from "react"
import { 
    useGetProductsQuery,
    useAddProductsMutation,
    useUpdateProductsMutation,
    useDeleteProductsMutation
} from "./api/apiSlice"

export default function() {
    const [product, setProduct] = useState('')

    const { data: products, isLoading, isError, isSuccess, error } = useGetProductsQuery()
    const [ addProducts ] = useAddProductsMutation()
    const [ updateProducts ] = useUpdateProductsMutation()
    const [ deleteProducts ] = useDeleteProductsMutation()

    const handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(product)
        setProduct("")
    }

    let content
    if(isLoading) {
        content = <div>loading...</div>
    }
    else if(isError) {
        content = <div>{error}</div>
    }
    else if(isSuccess) {
        content = <div>
            {
                products?.map(product => {
                    return <div 
                        key={product.id} 
                        style={{border: '2px solid black', padding: 5, margin: 5}}
                    >
                        <h5>{product.id}</h5>
                        <h5>{product.title}</h5>
                        <h5>{product.brand}</h5>
                        <h5>{product.description}</h5>
                        <h5>{product.color}</h5>
                        <h5>{product.category}</h5>
                        <h5>{product.price}</h5>
                        <h5>{product.link}</h5>
                        <button 
                            onClick={() => updateProducts({id: product.id})}
                        >Update Product</button> <br />
                        <button 
                            onClick={() => deleteProducts({id: product.id})}
                        >Delete Product</button>
                    </div>
                })
            }
            <button onClick={() => 
                addProducts({
                    id: product,
                    title: "Macbook Pro M3",
                    description: "Fastest and thinest Macbook with M3 chip",
                    brand: "Apple",
                    color: "Silver",
                    category: "SmartPhones",
                    price: 225000,
                    discount: "10%",
                    link: "https://apple.com/products/macbook=prom3"
                })
            }>Add Products</button>
        </div>
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input 
                    type="text"
                    onChange={event => setProduct(event.target.value)}
                    placeholder="enter a new Todo"
                    style={{padding: '4px 8px'}}
                />
                <button type="submit">Submit</button>
            </form>

            <div>
                {content}
            </div>
        </div>
    )
}