import React from 'react'

import './statuscard.css'

const StatusCard2 = props => {
    return (
        <div className='status-card'>
            <div className="status-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="status-card__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
                <br/>
                <div className="topnav__search">
                    <input type="text" placeholder='Write KwH Here' />
                </div>
            </div>
        </div>
    )
}

export default StatusCard2
