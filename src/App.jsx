import { Route, Routes } from "react-router-dom";

import { Home, VoltageDrop, CurrentCapacity } from "./pages/";
import { Layout } from "./layout/Layout";




function App() {

  return (

    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voltagedrop" element={<VoltageDrop />} />
        <Route path="/currentcapacity" element={<CurrentCapacity />} />
      </Routes>
    </Layout>


  )
}

export default App
