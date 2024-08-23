import { useState } from "react"

const Toolbar = ({ CProb, setCProb, materiaGenre, setMateriaGenre }) => {
    const [CProbDisp, setCProbDisp] = useState(CProb * 100);

    const handleChangeCProb = (event) => {
        let newCProbDisp = event.target.value;
        console.log(newCProbDisp)
        if (newCProbDisp > 99) { newCProbDisp = 99 }
        if (newCProbDisp < 1) { newCProbDisp = 1 }
        try {
            parseInt(newCProbDisp);
        }
        catch (Exception) {
            return null;
        }

        setCProb(newCProbDisp / 100);
        setCProbDisp(newCProbDisp);
    };

    return (
        <div className="container">
            <h5>設定</h5>
            <label>種類:</label><br />
            <select className="form-select" value={materiaGenre} onChange={(event) => setMateriaGenre(event.target.value)}>
                <option value="すべて">すべて</option>
                <option value="戦闘">戦闘</option>
                <option value="採取">採取</option>
                <option value="製作">製作</option>
            </select><br />
            <label>累積確率:</label><br />
            <input type="number" style={{ width: 80 }} value={CProbDisp} onChange={handleChangeCProb}></input>
        </div>
    )
}

export default Toolbar;