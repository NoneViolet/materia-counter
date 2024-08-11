import MeldArmor from "./MeldArmor"
import "./App.css"

function App() {
  return (
    <>
      <header><h1>マテリア禁断計算</h1></header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 col-xs-12 fixed-toolbar">
            Toolbar
          </div>

          <div className="col-10">
            <div className="d-flex flex-wrap">
              <MeldArmor slotName="メイン" />
              <MeldArmor slotName="サブ" />
              <MeldArmor slotName="頭" />
              <MeldArmor slotName="胴" />
              <MeldArmor slotName="手" />
              <MeldArmor slotName="脚" />
              <MeldArmor slotName="足" />
            </div>
          </div>
        </div>
      </div>
      <footer>© SQUARE ENIX</footer>
    </>
  );
}

export default App;
