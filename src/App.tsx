import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import { PrimeReactProvider } from "primereact/api";
import Home from "./components/home";


const App = () => {
  return (
    <>
    <PrimeReactProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>

    </>
  )
}
export default App;