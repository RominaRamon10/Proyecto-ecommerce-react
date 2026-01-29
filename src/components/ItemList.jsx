import Item from "./Item";

//VER SI ES ITEMS O PRODUCTS, product.id

const ItemList = ({items}) => {
    return(
        <div>
            {items.map(item => (
                <Item key={item.id} item={item}/>
            ))}

        </div>
    )
};

export default ItemList;