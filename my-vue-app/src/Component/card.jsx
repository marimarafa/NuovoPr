function Card(){
    const i = 'everyone';
    const image = 'https://images.unsplash.com/photo-1733234976396-87cf34ae6038?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8'
    return (
        <div>
            <img src= {image}>
            </img>
            <div>
                <h2>London</h2>
                <p> good morning  {i} !!!!! </p>

            </div>
        </div>
    )
}
export default Card;