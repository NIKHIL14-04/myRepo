import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    
                        <div className="card my-3" >
                            <img src={props.urlToImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.description}</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                </div>
            

        </>
    )
}

export default Card