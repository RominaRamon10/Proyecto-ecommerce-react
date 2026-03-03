import Item from "./Item"

const ItemList = ({ items }) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
            padding: "24px",
            maxWidth: "1200px",
            margin: "0 auto"
        }}>
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ItemList