import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const handleAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} unidades de ${item.title}`)
    }

    return(
        <div>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <p>${item.price}</p>

            <ItemCount stock={item.stock} initial={1} onAdd={handleAdd}/>
        </div>
    )
};

export default ItemDetail;