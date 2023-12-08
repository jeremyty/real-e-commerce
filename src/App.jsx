import { Provider } from "react-redux"
import Home from "./pages/Home"
import { store } from "./store"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { AuthProvider } from "./components/AuthProvider"


function App() {

  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={ <Home /> }/>
            <Route path="/login" element={<Login />}/>
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
     
  ) 
  
}

export default App
