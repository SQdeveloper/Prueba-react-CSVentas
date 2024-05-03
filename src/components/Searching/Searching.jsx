import React, { useEffect, useRef } from 'react';
import useLocalStorage from '../../Hooks/useLocalStorage';
import './Searching.css';

const Searching = ({updateQuery}) => {
    const [history, setHistory] = useLocalStorage('history', '');
    const inputRef = useRef(null);

    //Función que agrega una nueva busqueda al historial de busquedas
    const addHistory = (value)=>{        
        //Busco si la busqueda ya esta guardada
        const index = history.findIndex(element=> element == value);
        
        //Si la busqueda ya esta guardada, ya no la guardo otra vez.
        if(index >= 0) return;

        //Guardo la busqueda
        let list = [...history]
        list.unshift(value);        
        setHistory(list);
    }

    const handleSearch = (e)=>{
        e.preventDefault();        

        //Busqueda actual
        const currentQuery = inputRef.current.value;

        //here beabyyyyyyyyyyyyyyyyyyy
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
    
    //Realizo la busqueda desde las opciones del history
    const completeInput = (e)=>{
        e.preventDefault();      

        //Opcion del historial seleccionado
        const selectedOption = e.target.textContent;        

        //Actualizo la query para realizar la busqueda
        updateQuery(selectedOption)
    }

    //Función que abre la ventana del historial al hace click al input
    const openHistory = ()=> {
        const historyElement = document.querySelector('.searching-history');
        historyElement.classList.add('active');        
    }
    
    //Cerrar ventana de historial cuando se toque fuera del input
    useEffect(()=>{
        document.addEventListener('click', (e)=>{
            if(!e.target.matches('.searching-input')){
                const historyElement = document.querySelector('.searching-history');
                historyElement.classList.remove('active');        
            }
        })
    }, [])

    return (
        <>
            <form>
                <div className="content-input">
                    <input onClick={openHistory} ref={inputRef} className='searching-input' type="text" placeholder='search here...'/>
                    {
                        <div style={{display: history.length > 0 ? 'block' : 'none'}} className="searching-history">                        
                            <ul>
                                {history.map((his, index)=>(
                                    <li key={index} onClick={completeInput}><button >{his}</button></li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
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