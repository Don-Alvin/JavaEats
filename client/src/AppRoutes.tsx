import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import HomePage from "./pages/HomePage"
import AuthCallPackPage from "./pages/AuthCallPackPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route 
                path='/' 
                element={
                    <Layout>
                        <HomePage />
                    </Layout>
                } 
            />
            <Route path="/auth-callback" element={<AuthCallPackPage />} />
            <Route path='/user-profile' element={<span>User profile page</span>} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}

export default AppRoutes