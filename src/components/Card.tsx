 
import { Product, useMainContext } from '../context/MainContext'

const Card = ({data}:{data:Product}) => {

    const {AddToCartHandler} = useMainContext()

  return (
    <>
        <div   className='card py-3 shadow col-sm-10 col-lg-3  px-2 rounded'>
                                        <div className="mb-3" style={{width:'100%',height:'30vh',objectFit:'contain',overflow:'hidden'}}>
                                            <img src={data.image} loading='lazy' alt="" className='img-thumbnail' />
                                        </div>
                                        <div className="mb-3 bg-white">
                                            <h1 className='h3 text-center'>{data.title}</h1>
                                            <div className="d-flex align-items-center justify-content-between">
                                            <span className="bg-success text-white px-2 py-2 rounded btn-success">${data.price}/-</span>

                                            <button 
                                            onClick={()=>AddToCartHandler({
                                              id:data.id,
                                              image:data.image,
                                              price:Math.floor(data.price),
                                              title:data.title
                                            })}
                                            className="btn btn-primary">Add</button>
                                            </div>
                                        </div>
                            </div> 
    </>
  )
}

export default Card
