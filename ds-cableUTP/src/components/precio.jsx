import './precio.scss';

export default function Precio(){
    return (
        <div className="precio">
            <p>Precio por rollo: <span>USD 187</span></p>
           
           <div className="precio-cart">
                <button type='text'> Comprar </button>
                <i className="bi bi-cart3"></i>
           </div>
        </div>
    )
}