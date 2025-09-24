import './especificaciones.scss';

const properties = [
    {
        text: "Voltage",
        number: "300VAC or VDC"
    },
    {
        text: "Velocidad Nominal de Propagación",
        number: "70%"
    },
    {
        text: "Temperatura de Operación",
        number: "-20° C a -60° C"
    }, 
    {
        text: "Temperatura de Almacenamiento",
        number: "-20° C a -80° C"
    }
]


export default function Especificaciones(){
    
    return (
        <div className="specs">
            <h2>Especificaciones técnicas</h2>

            {properties.map((x, i)=> (
                <div className="specs-elements" key={i}>
                    <div className="specs-elements-text">
                        <p>✔ {x.text}:</p>
                    </div>

                    <div className="specs-elements-number">
                        <p>{ x.number}</p>
                    </div>
                </div>
            ))}
        </div>
    )

}