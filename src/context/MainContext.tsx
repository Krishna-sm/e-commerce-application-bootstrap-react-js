import axios from "axios";
import React,{ createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface Product{
    id:number,
    title:string
    price:number,
    image:string
}

export interface AddToCartOptions{
    id: number,
     title: string,
      image: string,
       price: number
}

export interface Checkout extends Product{
    id:number,
    title:string
    price:number,
    image:string,
    qty:number
}
interface MainContextProps{
    products:Product[]
    checkoutCart:Checkout[]
    AddToCartHandler:(data:AddToCartOptions)=>void
    deleteFromCart:(id:number)=>void
    incrementQty:(id:number)=>void
    decrementQty:(id:number)=>void

}

export const mainContext = createContext<MainContextProps>({
    products:[],
    checkoutCart:[],
    AddToCartHandler(){},
    deleteFromCart(){},
    incrementQty(){},
    decrementQty(){}
})


export const useMainContext = ()=> useContext(mainContext);



export const MainContextProvider = ({  children}:{children:React.ReactNode})=>{

    const [loading,setLoading] = useState(false)
    const [products,setProducts]=useState<Product[]>([])
    const [checkoutCart,setCheckoutCart]=useState<Checkout[]>(JSON.parse(localStorage.getItem("cart") || "[]"))


    const AddToCartHandler =(data:AddToCartOptions)=>{
               
        const check_exist =checkoutCart.find((cur)=>cur.id === data.id);
                if(!check_exist){
                    console.log(
                        "product not exist "
                    );
                    
                    checkoutCart.push({
                        ...data,
                        qty:1
                    })
                    setCheckoutCart(checkoutCart)    
                    
                    
                }
                    else{
                        
                // if product not exists
                const new_arr = checkoutCart.map((cur)=>{
                    if(cur.id===data.id){
                        return{
                            ...cur,
                            qty:cur.qty+1
                        }
                    }
                    return cur
                })

                setCheckoutCart(new_arr)
                    }

                    localStorage.setItem("cart",JSON.stringify(checkoutCart)) 
                      
                        toast.success("Product Added in Cart :)")
    }

    const deleteFromCart =(id:number)=>{
        const new_arr = checkoutCart.filter((c)=>c.id!==id)
        setCheckoutCart(new_arr)
        localStorage.setItem("cart",JSON.stringify(new_arr))
        toast.success("Product Deleted in Cart :)")

    }

    const incrementQty =(id:number)=>{
        const new_arr = checkoutCart.map((c)=>{
            if(c.id ===id){
                return {
                    ...c,
                    qty:c.qty+1
                }
            }
            return c
        })
        setCheckoutCart(new_arr)
        localStorage.setItem("cart",JSON.stringify(new_arr))
        toast.success("Product Quantity Increase in Cart :)")
    }

    const decrementQty =(id:number)=>{
        const new_arr = checkoutCart.map((c)=>{
            if(c.id ===id){
                return {
                    ...c,
                    qty:c.qty+1
                }
            }
            return c
        })
        setCheckoutCart(new_arr)
        localStorage.setItem("cart",JSON.stringify(new_arr))
        toast.success("Product Quantity Decrease in Cart :)")
    }
    const fetchAllProducts = async()=>{
        setLoading(true)
        try {
            // return 
            const res = await axios.get("https://fakestoreapi.com/products")

            const data =await res.data;
            setProducts(data);
            

        } catch (error:any) {
            console.log(error.message);
            
        }finally{
        setLoading(false)

        }
    }


    useEffect(()=>{
        fetchAllProducts()
    },[])
if(loading){
    return <div>loading...</div>
}
    return <mainContext.Provider value={{products,checkoutCart,AddToCartHandler,deleteFromCart,incrementQty,decrementQty}}>
        {children}
    </mainContext.Provider>
}