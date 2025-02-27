import { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

function SpaceShip () {
    const [inventory, setInventory] = useState([]);

    function handleAddItem(newItem) {
        setInventory(prevInventory => [...prevInventory, newItem]);
    }

    function handleDeleteItem(itemId) {
        setInventory(prevInventory => prevInventory.filter(item => item.id!== itemId));
    }

    return (
        <div>
            <h1>SpaceShip Inventory</h1>
            <ItemForm onItemSubmit={handleAddItem} />
            <InventoryDisplay inventory={inventory} onDeleteItem={handleDeleteItem} />
        </div>
    );
}

export default SpaceShip;