 
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import { useMainContext } from '../context/MainContext'

const CartPage = () => {

    const {checkoutCart,deleteFromCart,incrementQty,decrementQty} = useMainContext()

  return (
    <div className='container  d-flex flex-wrap align-items-start'>
            <div className="col-sm-12 col-lg-9 py-3 d-flex flex-wrap gap-4">
                    {
                        checkoutCart &&checkoutCart.length>0 ? checkoutCart.map((cur,i)=>{
                            return <div key={i} className="col-sm-12 d-flex justify-between py-4 rounded shadow align-items-center px-4">
                                    <div className="col-sm-4">
                                        <img src={cur.image} alt="" className='img-thumbnail w-50' />
                                    </div>
                                    <div className="col-sm-8">
                                        <h2>{cur.title}</h2>
                                        <span className='bg-success h3 text-white my-3 px-3 py-2 rounded'>Price: ${Math.floor(cur.price)}/-</span>
                                        <br />
                                        <br />
                                       

                                    <div className="d-flex gap-x-2">
                                        <button 
                                        onClick={()=>incrementQty(cur.id)}
                                        className="btn display-1">
                                            <CiSquarePlus size={34} /> 
                                        </button>
                                    <button   className="btn btn-secondary">{cur.qty}</button>
                                    <button 
                                    onClick={()=>decrementQty(cur.id)}
                                    className="btn display-1 ">
                                            <CiSquareMinus size={34}  /> 
                                        </button>
                                    </div>
                                       
                                    <div className="mb-3 py-4">
                                    <button onClick={()=>deleteFromCart(cur.id)} className="btn btn-danger">Delete</button>
                                    </div>
                                    </div>
                            </div>
                        }):
                        <div className="col-sm-12 shadow rounded text-center py-4">
                            <h1 className="text-center">No Item</h1>
                        </div>
                    }
            </div>
            <form className="col-sm-12 col-lg-3 px-3 py-3">
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" placeholder='Enter Your Name' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">Email</label>
                        <input type="text" className="form-control" placeholder='Enter Your Email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">Mobile</label>
                        <input type="text" className="form-control" placeholder='Enter Your Mobile no' />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-block col-sm-12 btn-primary">Checkout</button>
                    </div>
                    <div className="mb-3 bg-secondary py-5 rounded text-white shadow">
                        <h4 className='text-center '>Checkout: ${
                            checkoutCart &&checkoutCart.length>0 ?checkoutCart.map((cur)=>cur.price*cur.qty).reduce((c,a)=>c+a):0
                            }/-</h4>
                    </div>
            </form>
    </div>
  )
}

export default CartPage
