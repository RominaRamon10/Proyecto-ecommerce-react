// import Item from "./Item";

// const ItemList = ({items}) => {
//     return(

//         <div className="flex justify-content-center flex-wrap gap-4 mt-4"> 
            
//             {items.map(item => (
//                 <div
//                     key={item.id}
//                     className="col-10 sm:col-6 md:col-4 lg:col-3"
//                 >
//                     <Item item={item} />
//                 </div>
//             ))}
//         </div>
//     )
// };

// export default ItemList;

////////////////MODIFICACION 1
// import Item from "./Item";

// const ItemList = ({ items }) => {
//     return (
//         <div style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",  // 3 columnas fijas
//             gap: "24px",
//             padding: "24px",
//             maxWidth: "1200px",
//             margin: "0 auto"
//         }}>
//             {items.map(item => (
//                 <Item key={item.id} item={item} />
//             ))}
//         </div>
//     )
// }

// export default ItemList

////////////////MODIFICACION 2
import Item from "./Item"

const ItemList = ({ items }) => {
    return (
        <div style={{
            display: "grid",
            //3 columnas en desktop, 2 en tablet, 1 en celular
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