import { Link } from "react-router-dom";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Item = ({item}) => {
  
    const footer = (
        <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
            <Button
                label="Ver detalle"
                icon="pi pi-eye"
                className="p-button-outlined p-button-primary w-full"
            />
        </Link>
    );

    return (

        <Card
            title={item.title}
            footer={footer}
            className="w-15rem text-center shadow-3"
        >
            <img
                src={item.image}
                alt={item.title}
                className="w-full border-round mb-3"
                style={{ objectFit: 'cover', height: '180px' }}
            />

            <p className="text-sm mb-2">{item.description}</p>
            <p className="font-bold text-lg">${item.price}</p>
        </Card>
    );
};

export default Item;