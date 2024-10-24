import './App.css'
import Card from './components/card/card'
import Searchbar from './components/searchbar/searchbar'
import * as pagelists from './components/card/pagelists'

export default function App() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search" />
      <div className='Searchbar-container'>
        <Searchbar />
      </div>

      <div className='Cards'>
        {pagelists.names.map((item, i) => {
          return (<Card name={item} link={pagelists.links[i]}/>)
        })}
      </div>
    </>
  )
}
