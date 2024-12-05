  
function Card(props){
    const titolo = props.titolo
    const descrizione = props.descrizione
    const image = props.image
 
    return (
        <div>
            <img src= {image}>
            </img>
            <div>
                <h2>{titolo}</h2>
                <p> {descrizione} </p>

            </div>
        </div>
    )
}
export default Card;