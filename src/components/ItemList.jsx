import Item from "./Item";

const ItemList = ({items}) => {
    return(

        <div className="flex justify-content-center flex-wrap gap-4 mt-4"> 
            
            {items.map(item => (
                <div
                    key={item.id}
                    className="col-10 sm:col-6 md:col-4 lg:col-3"
                >
                    <Item item={item} />
                </div>
            ))}
        </div>
    )
};

export default ItemList;