import React from 'react';
import './Results.css';

const Results = ({data}) => {
    return (
        <div className='results'>
            {data.length > 0 ?
                data.map((result)=>(
                <section key={result.id} className="results-box">
                    <img src={result.images.fixed_width.url} alt={result.title} />
                </section>))
                :
                <span className='results-message'>Lo siento, tu busqueda no fue encontrada.</span>
            }
        </div>
    );
};

export default Results;