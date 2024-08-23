import { useState } from "react"

const Toolbar = ({ CProb, setCProb }) => {
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
            <label>累積確率:</label><br />
            <input type="number" style={{ width: 80 }} value={CProbDisp} onChange={handleChangeCProb}></input>
        </div>
    )
}

export default Toolbar;