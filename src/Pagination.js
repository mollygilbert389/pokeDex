import React from 'react'
import './style.css'

export default function Pagination({gotoNextPage, gotoPreviousPage}) {
    return (
        <div className="buttonsList">
            {gotoPreviousPage && <button className="blueButtons" onClick={gotoPreviousPage}>Previous</button>}
            {gotoNextPage && <button className="blueButtons" onClick={gotoNextPage}>Next</button>}
        </div>
    )
}
