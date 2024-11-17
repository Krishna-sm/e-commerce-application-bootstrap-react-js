 
import Card from '../components/Card'
import { useMainContext } from '../context/MainContext'

const HomePage = () => {

  const {products} = useMainContext()

  return (
    <>
    <div className="py-5"></div>
                <div className="d-flex justify-content-around container mx-auto row gap-3 flex-wrap">
                    {
                    products&&products.length>1 &&    products.map((cur,i)=>{
                            return <Card data={cur} key={i} />
                        })
                    }
                </div>
    </>
  )
}

export default HomePage
