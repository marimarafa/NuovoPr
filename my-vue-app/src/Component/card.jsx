  
function Card(props){
    const titolo = props.titolo
    const descrizione = props.descrizione
    const image = props.image
    const isVisitato = props.isVisitato

    if(isVisitato){
        return (
            <div>
                <img src= {image}>
                </img>
                <div>
                    <h2>{titolo}</h2>
                    <p> {descrizione} </p>
                    <span ><b> Visitato </b></span>
                </div>
            </div>

        )
} else {
    return (
        <div>
            <img src= {image}>
            </img>
            <div>
                <h2>{titolo}</h2>
                <p> {descrizione} </p>
                <span ><b> NON Visitato </b></span>

            </div>
        </div>

    )
}
}
export default Card;