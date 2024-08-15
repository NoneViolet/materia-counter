
const Result = ({ CProb, allMateriaSlot }) => {

    const successRate = [1, 1, 0.17, 0.1, 0.07];

    const calcNeedCount = (slotIndex) => {
        console.log("Run Calc: target=>", CProb)
        let count = 1;
        let currentCProb = 0;
        while (currentCProb <= CProb) {
            if (successRate[slotIndex] >= CProb) {
                break;
            }
            currentCProb += ((1 - successRate[slotIndex]) ** (count - 1)) * successRate[slotIndex];
            count += 1;
        }
        return count;
    }

    const allMateriaArray = allMateriaSlot.flat();
    const allMateriaCount = allMateriaArray.reduce((result, materia, index) => {
        if (materia) {
            const slotIndex = index % 5;
            const count = calcNeedCount(slotIndex);
            result[materia] = (result[materia] || 0) + count;
        }
        return result;
    }, {})

    return (
        <>
            <div>
                <h2>マテリア必要数</h2>
                <ul>
                    {Object.entries(allMateriaCount).map(([materia, count]) => (
                        <li key={materia}>
                            {materia}: {count} 個
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Result;