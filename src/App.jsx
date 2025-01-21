import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from './Pages/home'
import GraphicPage from './Pages/graphicDesign'
import Video from './Pages/videography'
import WebDev from './Pages/webDev'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/graphic-design' element={<GraphicPage />}/>
          <Route path='/videography' element={<Video />}/>
          <Route path='/web-dev' element={<WebDev />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
