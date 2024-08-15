import MeldArmor from "./MeldArmor"
import Result from "./Result"
import Toolbar from "./Toolbar";
import { useState } from "react";
import "./App.css"

function App() {
  const gearList = ["メイン", "サブ", "頭", "胴", "手", "脚", "足"]
  const slotList = ["1 Slot", "2 Slot", "3 Slot", "4 Slot", "5 Slot"];
  const materiaList = ["",
    "武略 大 CRT", "武略 小 CRT", "天眼 大 DH", "天眼 小 DH", "雄略 大 DET", "雄略 小 DET",
    "戦技 大 SKS", "戦技 小 SKS", "詠唱 大 SPS", "詠唱 小 SPS",
    "剛柔 大 TEN", "剛柔 小 TEN", "信力 大 PIE", "信力 小 PIE",
    "達識 大 GATH", "達識 小 GATH", "博識 大 PERC", "博識 小 PERC", "器識 大 GP", "器識 小 GP",
    "名匠 大 CRFT", "名匠 小 CRFT", "巨匠 大 CNTL", "巨匠 小 CNTL", "魔匠 大 CP", "魔匠 小 CP"
  ];

  const [allMateriaSlot, setAllMateriaSlot] = useState(gearList.map(() => Array(5).fill("")));
  const [CProb, setCProb] = useState(0.9);

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

  return (
    <>
      <header><h1>マテリア禁断計算</h1></header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 col-xs-12 fixed-toolbar">
            <Toolbar
              CProb={CProb}
              setCProb={setCProb}
            />
          </div>

          <div className="col-10">
            <div className="d-flex flex-wrap">
              {gearList.map((gearName, gearIndex) => (
                <MeldArmor
                  gearName={gearName}
                  slotList={slotList}
                  materiaList={materiaList}
                  selectedMateria={allMateriaSlot[gearIndex]}
                  onMateriaChange={(materia, slotIndex) => updateMateriaSlot(gearIndex, slotIndex, materia)}
                />
              ))}
            </div>
          </div>
          <div className="row">
            <Result
              CProb={CProb}
              allMateriaSlot={allMateriaSlot}
            />
          </div>
        </div>
      </div>
      <footer>© SQUARE ENIX</footer>
    </>
  );
}

export default App;
