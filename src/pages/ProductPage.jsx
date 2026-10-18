import { useEffect } from "react"
import { useState } from "react"
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";

const ProductPage = () => {
    const [productsData,setProductsData] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const getProductsData = async () => {
        setIsLoading(true)
        try {
            const res = await axiosInstance.get(`/products`)
            setProductsData(res.data);
        } catch (error) {
            console.log("error in products api", error);
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getProductsData()
    },[])

    if(isLoading) return <h1 className='text-4xl'>Loading products...</h1>

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ProductPage