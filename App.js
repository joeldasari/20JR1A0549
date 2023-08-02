import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [listitem, setListItem] = useState([]);
    const uniqueNumbers = (name) => {
      Axios.get(`http://20.244.56.144/numbers/${name}`).then((re) => {
      console.log(re.data.numbers);
    })
    }
  return(
    <div>
      <button onClick={() => uniqueNumbers("fibo")}>Fibo</button>
      <button onClick={() => uniqueNumbers("rand")}>rand</button>
      <button onClick={() => uniqueNumbers("odd")}>odd</button>
      <button onClick={() => uniqueNumbers("primes")}>primes</button>
    </div>
  );
}

export default App;
