import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/CartContext'
import { getProducts } from '../db/products'
import ItemList from '../components/ItemList'
import Loading from '../components/Loading'

const Home = () => {
  const { categoryID } = useParams();
  const { categories } = useContext(AppContext)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const category = categories.find(category => category.id === categoryID)

  useEffect(() => {
    setIsLoading(true)
    setProducts([])

    getProducts(categoryID)
      .then(items => setProducts(items))
      .finally(() => setIsLoading(false))
  }, [categoryID])

  return (
    <>
      {category && <h4>{category.name}</h4>}
      {isLoading? <Loading/>: <ItemList items={products}/>}
    </>
  )
}

export default Home;