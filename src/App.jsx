import { Route, Routes } from "react-router-dom";

import { Home, VoltageDrop, AwgByCurrent, ConduitFill } from "./pages/";
import { Layout } from "./layout/Layout";




function App() {

  return (

    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voltagedrop" element={<VoltageDrop />} />
        <Route path="/awgbycurrent" element={<AwgByCurrent />} />
        <Route path="/conduitfill" element={<ConduitFill />} />
      </Routes>
    </Layout>


  )
}

export default App
