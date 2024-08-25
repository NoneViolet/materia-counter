
const Result = ({ CProb, slotError, allSuccessRate, allMateriaSlot }) => {

    const calcNeedCount = (i, j) => {
        let count = 1;
        let currentCProb = 0;
        while (currentCProb <= CProb) {
            if (allSuccessRate[i][j] >= CProb) {
                break;
            }
            currentCProb += ((1 - allSuccessRate[i][j]) ** (count - 1)) * allSuccessRate[i][j];
            count += 1;
        }
        return count;
    }

    const allMateriaCount = () => {
        let result = {};
        for (let i = 0; i < allMateriaSlot.length; i++) {
            for (let j = 0; j < allMateriaSlot[i].length; j++) {
                if (allMateriaSlot[i][j].trim()) {
                    const count = calcNeedCount(i, j);
                    result[allMateriaSlot[i][j]] = (result[allMateriaSlot[i][j]] || 0) + count;
                }
            }
        }
        return result;
    }

    const resultList = () => {
        return (
            <ul>
                {Object.entries(allMateriaCount()).map(([materia, count]) => (
                    <li key={materia}>
                        {materia.split(" ")[0] + " " + materia.split(" ")[1]}: {count} 個
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div className="container">
            <h5>必要数</h5>
            {slotError ? "大マテリアがはまりません！" : resultList()}
        </div>
    )
}

export default Result;