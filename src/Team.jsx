import { useState } from "react";

export default function Team () {
    const [team, setTeam] = useState(11)

    const handleAdd = () => {
        const newCount = team + 1;
        setTeam(newCount)
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h2>Players: {team}</h2>
            <button onClick={handleAdd}>add</button>
        </div>
    )
}