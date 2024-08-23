import { useEffect, useState } from "react";
import "./Table.css"

const MateriaPicker = ({ gearName, materiaList, successRate, selectedMateria, onMateriaChange, gearConfig, onGearChange }) => {
    const [slotNumber, setSlotNumber] = useState(5);
    useEffect(() => {
        if (gearConfig === "確定3枠") {
            setSlotNumber(3)
        } else if (gearConfig === "確定2枠") {
            setSlotNumber(2)
        } else if (gearConfig === "確定1枠") {
            setSlotNumber(1)
        } else {
            setSlotNumber(5)
        }
    }, [gearConfig])


    return (
        <div className="countainer table-container">
            <h3>{gearName ?? ""}</h3>
            <select className="form-select form-type" value={gearConfig} onChange={(event) => onGearChange(event.target.value)}>
                <option value="禁断">禁断</option>
                <option value="新式SP">新式SP</option>
                <option value="確定3枠">確定3枠</option>
                <option value="確定2枠">確定2枠</option>
                <option value="確定1枠">確定1枠</option>
            </select>
            <div className="table custom-table">
                <tb>
                    {
                        [...Array(slotNumber)].map((_, index) => (
                            <tr key={index}>
                                <td className="td-slotname">
                                    <p>{index + 1 + " slot"}</p>
                                </td>
                                <td className="td-slotform">
                                    <select className="form-select form-materia" value={selectedMateria[index]} onChange={(event) => onMateriaChange(index, event.target.value)}>
                                        {materiaList.map((option, optionIndex) => (
                                            <option key={optionIndex} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td className="td-slotsuccess">
                                    <p>{Math.round(successRate[index] * 100) + "%"}</p>
                                </td>
                            </tr>
                        ))}
                </tb>
            </div>
        </div>
    );
};

export default MateriaPicker;
