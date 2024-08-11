import "./Table.css"

const MeldArmor = ({ slotName }) => {
    const slots = ["1 Slot", "2 Slot", "3 Slot", "4 Slot", "5 Slot"];
    const materiaList = ["",
        "武略 大 CRT", "武略 小 CRT", "天眼 大 DH", "天眼 小 DH", "雄略 大 DET", "雄略 小 DET",
        "戦技 大 SKS", "戦技 小 SKS", "詠唱 大 SPS", "詠唱 小 SPS",
        "剛柔 大 TEN", "剛柔 小 TEN", "信力 大 PIE", "信力 小 PIE",
        "達識 大 GATH", "達識 小 GATH", "博識 大 PERC", "博識 小 PERC", "器識 大 GP", "器識 小 GP",
        "名匠 大 CRFT", "名匠 小 CRFT", "巨匠 大 CNTL", "巨匠 小 CNTL", "魔匠 大 CP", "魔匠 小 CP"
    ];

    return (
        <div className="countainer table-container">
            <h3>{slotName ?? ""}</h3>
            <div className="table custom-table">
                <tb>
                    {slots.map((slot, index) => (
                        <tr key={index}>
                            <td style={{ width: "30%" }}>
                                <p>{slot}</p>
                            </td>
                            <td style={{ width: "70%" }}>
                                <select className="form-select">
                                    {materiaList.map((option, idx) => (
                                        <option key={idx} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tb>
            </div>
        </div>
    );
};

export default MeldArmor;
