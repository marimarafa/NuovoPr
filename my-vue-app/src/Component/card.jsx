function Card(props){
    const titolo = props.titolo
    const descrizione = props.descrizione
    const image = props.image
    const isVisitato = props.isVisitato
    return (
        
    <div>
            <h2>{titolo}</h2>
            <p> {descrizione} </p>
            {isVisitato && <span ><b>  Visitato  </b></span>}
            {! isVisitato && <span ><b>  Non Visitato  </b></span>}
            <div>
                <img src= {image}>
                </img>
            </div>
    </div>

    )
}
export default Card;
