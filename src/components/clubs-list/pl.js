import React from 'react'
import Plc from '../../Plc.json'
import { Club } from '../club/club'

export const Pl = () => {
  return (
    <div>
        <h1>Premier league clubs:</h1>
        {
            Plc.map( ({id, team, stadium, nickname}) => {
                return (
                    <div key={id}>
                        <Club team={team} stadium={stadium} nickname={nickname} />                  
                    </div>
                )
            })
        }
    </div>
  )
}
