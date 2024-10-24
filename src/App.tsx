import './App.css';
import Card from './components/card/card';
import * as pagelists from './components/card/pagelists'

function App() {
  return (
    <>
      <div className='Cards'>
        {pagelists.names.map((item) => {
          return (<Card name={item} link='https://www.youtube.com/'/>)
        })}
      </div>
    </>
  );
}

export default App;
