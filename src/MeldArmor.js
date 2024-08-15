import "./Table.css"

const MeldArmor = ({ gearName, slotList, materiaList, selectedMateria, onMateriaChange }) => {

    return (
        <div className="countainer table-container">
            <h3>{gearName ?? ""}</h3>
            <div className="table custom-table">
                <tb>
                    {slotList.map((slot, index) => (
                        <tr key={index}>
                            <td className="td-slotname">
                                <p>{slot}</p>
                            </td>
                            <td className="td-slotform">
                                <select className="form-select" value={selectedMateria[index]} onChange={(event) => onMateriaChange(event.target.value, index)}>
                                    {materiaList.map((option, slotIndex) => (
                                        <option key={slotIndex} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td className="td-slotsuccess">
                                <p>XXX%</p>
                            </td>
                        </tr>
                    ))}
                </tb>
            </div>
        </div>
    );
};

export default MeldArmor;
