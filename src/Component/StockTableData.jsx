const StockTableData = ({ stock, onEdit }) => {
    return (
        <tr>
            <td>{stock.Item}</td>
            <td>{stock.Qty}</td>
            <td>{stock.Dealer}</td>
            <td>{stock.Date}</td>
            <td>{stock.Mrp}</td>
            <td>{stock.Sp}</td>
            <td>
                <button className='buttondet' onClick={() => onEdit(stock)}>Details</button>
            </td>
        </tr>
    );
};

export default StockTableData;
