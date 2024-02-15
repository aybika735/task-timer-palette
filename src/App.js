// import { useSelector } from "react-redux";
import TimerPage from "./pages/TimerPage/TimerPage";
import PalettePage from "./pages/PalettePage/PalettePage";
import { Route, Routes, Link} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="header">
       <div> <Link className='link_palette' to={'/palette'}>Палитра</Link></div>
       <div>  <Link className = 'link_timer' to={'/timer'}>Таймер</Link></div>
      
      </div>
      
      <Routes>
        <Route path={"/timer"} element={<TimerPage />} />
        <Route path={"/palette"} element={<PalettePage />} />
      </Routes>
    </div>
  );
}

export default App;
