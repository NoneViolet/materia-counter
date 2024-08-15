import { useState } from "react"

const Toolbar = ({ CProb, setCProb }) => {

    const [CPConfig, setCPConfig] = useState(true); //TODO: 変数名をいい感じにする
    const handleChangeCProb = (event) => { setCProb(event.target.value) };

    return (
        <>
            (ここに単体の累積か全体かを決めるヤツを置く) <br /><br />
            <form>
                <label>累積確率:</label>
                <input type="text" value={CProb} onChange={handleChangeCProb}></input>
                <label>全体累積確率:</label>
                <input type="text" value="TBD" disabled={CPConfig}></input>
            </form>

        </>
    )
}

export default Toolbar;