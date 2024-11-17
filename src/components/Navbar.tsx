 
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header className="w-full navbar navbar-dark bg-dark px-4">
            <div className="container-fluid">

        <Link className="navbar-brand" to="/">Shopify</Link>
            
        <ul className="navbar-nav   ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className='nav-link active' to={'/'}>Home</Link>
            </li>
            <li className="nav-item ">
            <Link className='nav-link active' to={'/cart'}>Cart</Link>
            </li>
            </ul>
            </div>
            </header> 
    </>
  )
}

export default Navbar
