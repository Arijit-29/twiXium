import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { useState } from "react"
function App() {
     const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }
 return (
  <div className="app-container">
  <Sidebar  isOpen={sidebarOpen} toggleSidebar={toggleSidebar} ></Sidebar>
  <div className="content">
  <Header toggleSidebar={toggleSidebar}></Header>
  <Footer></Footer>
  </div>
  </div>
 )
}

export default App
