import React from 'react'

export default function CardBody(props) {
    return (
        <div className="card-body">
          <p className="card-text">Click Count: {props.count}</p>
          <button className="btn btn-primary" onClick={props.handleIncrement}>
            Increment
          </button>
          <br></br>
          <button className="btn btn-primary" onClick={props.handleDecrement}>
            Decrement
          </button>
        </div>
    )
}
