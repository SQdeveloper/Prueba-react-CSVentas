import React from 'react';
import './Results.css';

const Results = ({data}) => {
    return (
        <div className='results'>
            {data && 
                data.map((result)=>(
                <section key={result.id} className="results-box">
                    <img src={result.images.fixed_width.url} alt={result.title} />
                </section>
            ))}
        </div>
    );
};

export default Results;