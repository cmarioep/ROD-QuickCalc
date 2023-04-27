import { Route, Routes } from "react-router-dom";

import { VoltageDrop } from './components/VoltageDrop';


function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<VoltageDrop />} />
      </Routes>
    </>

  )
}

export default App
