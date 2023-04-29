import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { VoltageDrop } from './components/VoltageDrop';




function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voltagedrop" element={<VoltageDrop />} />
      </Routes>
    </>

  )
}

export default App
