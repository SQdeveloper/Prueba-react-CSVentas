import React, { useRef } from 'react';
import useLocalStorage from '../../Hooks/useLocalStorage';
import './Searching.css';

const Searching = ({updateQuery}) => {
    const [history, setHistory] = useLocalStorage('history', '');
    const inputRef = useRef(null);

    //Función que agrega una nueva busqueda al historial de busquedas
    const addHistory = (value)=>{
        let list = [...history]
        list.push(value);
        list.reverse();
        setHistory(list);
    }

    const handleSearch = (e)=>{
        e.preventDefault();        

        //Busqueda actual
        const currentQuery = inputRef.current.value;

        //Actualizo la query para realizar la busqueda
        updateQuery(currentQuery)

        //Agrego la nueva busqueda al history
        addHistory(currentQuery)

        inputRef.current.value = '';
    }       
    
    //Función que borra todo el historial
    const deleteHistory = ()=>{    
        setHistory([]);
    }


    //Función que borra la ultima busqueda
    const deleteLastSearch = ()=> {
        const list = [...history];
        list.shift();
        setHistory(list);
    }

    return (
        <>
            <form>
                <input ref={inputRef} className='searching-input' type="text" placeholder='search here...'/>
                {history.length > 0 && 
                    <div className="searching-history">
                        <ul>
                            {history && 
                                history.map((his, index)=>(
                                    <li key={index}>{his}</li>
                                ))}
                        </ul>
                    </div>
                }
                <button className='button-search' onClick={handleSearch}>Search</button>            
            </form>
            {history.length > 0 && 
                <div className="buttons-delete">        
                    <button onClick={deleteHistory}>Borrar historial</button>
                    <button onClick={deleteLastSearch}>Borrar ultima busqueda</button>
                </div>
            }
        </>
    );
};

export default Searching;