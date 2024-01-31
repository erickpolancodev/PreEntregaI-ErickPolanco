
import './styles/App.css'

import { Navbar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'

export const App = () =>{

  return (
    <>
      <Navbar />
      <div className="hero container bg-gray-200 mx-auto py-2 mb-2">

      </div>
      <div className="container p-5 my-2">
        <ItemListContainer greeting="Item I"/>
      </div>
    </>
  )
}
