import './App.css'
import Results from './components/Results/Results'
import useResults from './Hooks/useResults'
import Searching from './components/Searching/Searching';
import { useState } from 'react';

function App() {  
  const [query, setQuery] = useState('p');
  const {results} = useResults(query);  

  const updateQuery = (value)=>{
    setQuery(value);
  }

  return (
    <>
      <Searching updateQuery={updateQuery}/>      
      <Results data={results}/> 
    </> 
  )
}

export default App
