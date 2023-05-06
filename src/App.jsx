import { Route, Routes } from "react-router-dom";

import { Home, VoltageDrop, AwgByCurrent } from "./pages/";
import { Layout } from "./layout/Layout";




function App() {

  return (

    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voltagedrop" element={<VoltageDrop />} />
        <Route path="/awgbycurrent" element={<AwgByCurrent />} />
      </Routes>
    </Layout>


  )
}

export default App
