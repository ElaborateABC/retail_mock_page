import React, {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from './redux/hooks'
import { createData } from './redux/reducer'
import './App.css'
import Header from './components/Header'
import Details from './components/Details'
import RetailGraph from './components/RetailGraph'
import RetailTable from './components/RetailTable'
import { ProductType } from './constants'

const App = () => {
  const {value} = useAppSelector((state:any) => state.json)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(createData('./data/data.json'))
  }, [])
  return (
    <div className='App'>
      <Header />
      {value.length > 0 && value.map((item: ProductType) => <div key={item.id} className={'VerticalFrame'}>
          <Details title={item.title} subtitle={item.subtitle} tags={item.tags} image={item.image} />
          <div className={'horizontalFrame'}>
            <RetailGraph sales={item.sales} />
            <RetailTable sales={item.sales} />
          </div>
        </div>)}

    </div>
  )
}

export default App;
