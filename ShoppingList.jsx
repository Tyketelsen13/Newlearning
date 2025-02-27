import React, { useState } from 'react';

const ShoppingList = () => {
    const INITIAL_STATE = [
        { id: 1, item: 'Apple', quantity: 2 },
        { id: 2, item: 'Banana', quantity: 1 },
        { id: 3, item: 'Orange', quantity: 3 }
    ]
    const [items, setItems] = useState(INITIAL_STATE);
    return (
        <div>
           <h3>Shopping List</h3>
           <div>
            {items.map(item => <Item id={id} name={name} quantity={quantity} key={id} /> )}
           </div>
        </div>
    )
}

export default ShoppingList;