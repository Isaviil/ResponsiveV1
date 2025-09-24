import './descripcion.scss';

    const desc = [
        "Los Cables AMP NetConnect categoría 6 exceden los requerimientos TIA/EIA-568-B.2-1 e ISO / IEC 11801 Clase E.",
        "Además, cumplen con todos los requisitos de rendimiento para aplicaciones actuales y propuestas, tales como Gigabit Ethernet (1000BASE-TX), 10/100BASE-TX, Token Ring, ATM 155 Mbps, 100 Mbps TPPMD, vídeo ISDN, analógico y digital, y voz analógica y digital (VoIP).",
        "Los cables AMP NetConnect categoría 6 UTP están disponibles en colores estándar (CMR), incluyendo blanco, gris y azul. El embalaje es en un reel-in-box, con el estándar de 1000 ft libres de empalme longitudinales.",
        "El rendimiento del cable debe ser verificado independientemente y caracterizado a 600 MHz. El cable se suministra en un carrete-in-box. La verificación independiente del cumplimiento de inflamabilidad será según NEC artículo 800 y NFPA 70, CMR (ANSI / UL 1666, IEC 332-1). El cable horizontal debe ser AMP NETCONNECT número X-1427200-X."
    ]

export default function Descripcion(){

    return (
        <div className="description">
           
            
            <div className="description-p">
                <h2>Descripción:</h2>

                {desc.map((x,i)=> 
                    (<p key={i}>
                        • {x}
                    </p>)
                )}
            </div>
        </div>
    )
}