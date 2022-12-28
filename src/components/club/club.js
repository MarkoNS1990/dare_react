import React from 'react'

export const Club = ({id, team, stadium, nickname}) => {
    return (
        <div className="card">
            <h3>{team}</h3>
            <p>Stadion: {stadium}</p>
            <p>Nadimak: {nickname}</p>
        </div>
    )
}
