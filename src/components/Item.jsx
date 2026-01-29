import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <div>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p>${item.price}</p>

            <Link to={`/item/${item.id}`}> 
                Ver detalle
            </Link>
        </div>
    )
};

export default Item;