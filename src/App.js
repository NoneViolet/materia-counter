import MateriaPicker from "./MateriaPicker"
import Result from "./Result"
import Toolbar from "./Toolbar";
import { useEffect, useState } from "react";
import "./App.css"

function App() {
  const gearList = ["メイン", "サブ", "頭", "胴", "手", "脚", "足", "耳", "首", "腕", "指1", "指2"];
  const thresholdAccesory = 7;
  const materiaList = ["",
    "武略 大 CRT", "武略 小 CRT", "天眼 大 DH", "天眼 小 DH", "雄略 大 DET", "雄略 小 DET",
    "戦技 大 SKS", "戦技 小 SKS", "詠唱 大 SPS", "詠唱 小 SPS",
    "剛柔 大 TEN", "剛柔 小 TEN", "信力 大 PIE", "信力 小 PIE",
    "達識 大 GATH", "達識 小 GATH", "博識 大 PERC", "博識 小 PERC", "器識 大 GP", "器識 小 GP",
    "名匠 大 CRFT", "名匠 小 CRFT", "巨匠 大 CNTL", "巨匠 小 CNTL", "魔匠 大 CP", "魔匠 小 CP"
  ];

  const successRateMeldArmor = [1, 1, 0.17, 0.1, 0.07];
  const successRateMeldAccessory = [1, 0.17, 0.1, 0.07, 0.05];
  const successRateSpecial = [1, 1, 1, 1, 1]

  const [allMateriaSlot, setAllMateriaSlot] = useState(gearList.map(() => Array(5).fill("")));
  const [allSuccessRate, setAllSuccessRate] = useState(gearList.map(() => Array(5).fill(0)));
  const [allGearConfig, setAllGearConfig] = useState(Array(gearList.length).fill("禁断"));
  const [CProb, setCProb] = useState(0.9);

  useEffect(() => {
    const newSuccessRate = [...allSuccessRate];
    for (let gearIndex = 0; gearIndex < gearList.length; gearIndex++) {
      if (allGearConfig[gearIndex] === "禁断") {
        if (gearIndex < thresholdAccesory) {
          newSuccessRate[gearIndex] = successRateMeldArmor;
        } else {
          newSuccessRate[gearIndex] = successRateMeldAccessory;
        }
      } else {
        newSuccessRate[gearIndex] = successRateSpecial;
      }
    }
    setAllSuccessRate(newSuccessRate) //eslint-disable-next-line
  }, [allGearConfig])

  const updateMateriaSlot = (gearIndex, slotIndex, materia) => {
    const newMateriaSlot = allMateriaSlot.map((searchGear, searchGearIndex) => {
      if (searchGearIndex === gearIndex) {
        return searchGear.map((searchSlot, searchSlotIndex) => {
          if (searchSlotIndex === slotIndex) {
            return materia;
          } else {
            return searchSlot;
          }
        });
      } else {
        return searchGear;
      }
    });
    setAllMateriaSlot(newMateriaSlot)
    console.log(allMateriaSlot)
  }

  const updateGearConfig = (gearIndex, type) => {
    const newGearConfig = [...allGearConfig];
    newGearConfig[gearIndex] = type;
    setAllGearConfig(newGearConfig);

    const newAllMateriaSlot = [...allMateriaSlot];
    newAllMateriaSlot[gearIndex] = Array(5).fill("");
    setAllMateriaSlot(newAllMateriaSlot);
  }

  const setAllGearUI = () => {
    const allGearUI = [];
    for (let gearIndex = 0; gearIndex < gearList.length; gearIndex++) {

      allGearUI.push(
        <MateriaPicker
          gearName={gearList[gearIndex]}
          successRate={allSuccessRate[gearIndex]}
          materiaList={materiaList}
          selectedMateria={allMateriaSlot[gearIndex]}
          onMateriaChange={(slotIndex, materia) => updateMateriaSlot(gearIndex, slotIndex, materia)}
          gearConfig={allGearConfig[gearIndex]}
          onGearChange={(type) => updateGearConfig(gearIndex, type)}
        />
      )
    }

    return allGearUI
  }

  return (
    <>
      <header><h1>マテリア禁断計算</h1></header>
      <div className="container-fluid">
        <div className="row">
          <div className=" col-md-2 col-12 fixed-toolbar">
            <Toolbar
              CProb={CProb}
              setCProb={setCProb}
            /> <br />
            <Result
              CProb={CProb}
              allMateriaSlot={allMateriaSlot}
              allSuccessRate={allSuccessRate}
            />
          </div>

          <div className="col-10">
            <div className="d-flex flex-wrap">
              {setAllGearUI()}
            </div>
          </div>
        </div>
      </div>
      <footer>© SQUARE ENIX</footer>
    </>
  );
}

export default App;
