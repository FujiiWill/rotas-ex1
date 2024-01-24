import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import Sales from "./routes/Home/Sales"

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<HomeBody/>} />
        <Route path="sales" element={<Sales/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
