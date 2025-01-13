import Header from './Components/Header/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'

function Layout() {
    return(
        <>
            <Header />
            <div className="page">
                <Outlet />
                <Footer />
            </div>
            
        </>
    )
}
export default Layout