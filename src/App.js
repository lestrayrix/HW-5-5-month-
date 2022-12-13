import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersListPage from "./pages/usersListPage/UsersListPage";
import UserInfo from "./components/userInfo/UserInfo";
import AddUserPage from "./pages/addUserPage/AddUserPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import {Container} from "react-bootstrap";

function App() {
    return (
        <BrowserRouter>
            <Container>
                <Header/>
                <Routes>
                    <Route index element={<UsersListPage/>}/>
                    <Route path="register" element={<AddUserPage/>}/>

                    <Route path="/:id" element={<UserInfo/>}/>
                </Routes>
            </Container>

        </BrowserRouter>
    );
}

export default App;
