function ItemAction ({ itemId, onDeleteItem }) {
    return (
        <>
        <button onClick={() => onDeleteItem(itemId)}>Delete</button>
        </>
    );
}

export default ItemAction;