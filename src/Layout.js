import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import Dashboard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import { Toast } from 'bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Auth/Register';
import ListQuiz from './components/User/ListQuiz';
import DetailQuiz from './components/User/DetailQuiz';
import ManageQuiz from './components/Admin/Content/Quiz/ManageQuiz';
const NotFound = () => {
  return (
    <div className="container mt-3 alert alert-danger">
      ERRO 404 : Not found DATA with current URL!
    </div>
  );
};
const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route path="users" element={<ListQuiz />}></Route>
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />}></Route>

        <Route path="/admins" element={<Admin />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="manage-users" element={<ManageUser />}></Route>
          <Route path="manage-quizzes" element={<ManageQuiz />}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default Layout;
