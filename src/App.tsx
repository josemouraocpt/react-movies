import { Link, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
    return (
    <div className="h-full bg-violet-600 font-sans text-white">
      <Navbar></Navbar>
						<Outlet/>
				</div>
  )
}

export default App
