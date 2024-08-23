import { useState } from "react"

const Toolbar = ({ CProb, setCProb }) => {
    const [CProbDisp, setCProbDisp] = useState(Math.round(CProb * 100));

    const handleChangeCProb = (event) => {
        let newCProbDisp = event.target.value;
        if (newCProbDisp > 99) { newCProbDisp = 99 }
        if (newCProbDisp < 1) { newCProbDisp = 1 }
        try {
            parseInt(newCProbDisp);
        }
        catch (Exception) {
            return;
        }

        setCProb(Math.round(newCProbDisp / 100));
        setCProbDisp(newCProbDisp);
    };

    return (
        <>
            <div className="container">
                <form>
                    <label>累積確率:</label>
                    <input type="number" value={CProbDisp} onChange={handleChangeCProb}></input>
                </form>
            </div>
        </>
    )
}

export default Toolbar;