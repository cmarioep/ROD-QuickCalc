import { Route, Routes } from "react-router-dom";

import { Home, VoltageDrop, CurrentCapacity } from "./pages/";


function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voltagedrop" element={<VoltageDrop />} />
        <Route path="/currentcapacity" element={<CurrentCapacity />} />
      </Routes>
    </>

  )
}

export default App
