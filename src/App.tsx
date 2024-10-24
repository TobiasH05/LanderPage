import './App.css'
import Card from './components/card/card'
import * as pagelists from './components/card/pagelists'

export default function App() {
  return (
    <>
      <div className='Cards'>
        {pagelists.names.map((item, i) => {
          return (<Card name={item} link={pagelists.links[i]}/>)
        })}
      </div>
    </>
  )
}
