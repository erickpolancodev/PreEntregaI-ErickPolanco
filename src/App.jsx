
import './styles/App.css'

import { Navbar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'

export const App = () =>{

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Item I"/>
    </>
  )
}
