const DataTable = ({columns, filterItem}) => {
    return(
    <>
        <table className="table">
        <thead>
            <tr>
                {columns.map((col) => (
                    <th scope ="col">{col.label}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {filterItem.length === 0 ? (
                <tr>
                    <td colSpan={columns.length}>No hay datos disponibles.</td>
                </tr>
            ) : (
                filterItem.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.age || item.climate || item.classification || item.description}</td>
                        <td>{item.gender || item.terrain || item.eye_colors || item.vehicle_class}</td>     
                    </tr>
                ))
            )}
        </tbody>
    </table>
    </>
    );
}
export default DataTable;