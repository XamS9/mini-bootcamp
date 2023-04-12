import LoginForm from "../pages/login";
import RegisterForm from "../pages/register";
import Home from "../pages/home";
import { Routes, Route, Navigate } from "react-router-dom";
import { IsLogged } from "../components/isLogged";
import { AppContext } from "../context/loginContext";
import { useContext } from "react";
import Header from "../components/header";
import Dashboard from "../pages/dashboard";
import Preferences from "../pages/preferences";
import { IsUser } from "../components/isUser";
import Course from "../pages/course";
import Category from "../pages/category";
import Subcategory from "../pages/subcategory";
import Topic from "../pages/topic";

export const GlobalRoutes = () => {
  const context = useContext(AppContext);
  return (
    <>
      <Header />
      <Routes>
        <Route element={<IsLogged user={context.loginState} />}>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />} exact></Route>
          <Route path="/course/:id" element={<Course />} exact></Route>
          <Route path="/category/:id" element={<Category />} exact></Route>
          <Route path="/subcategory/:id" element={<Subcategory />} exact></Route>
          <Route path="/topic/:id" element={<Topic />} exact></Route>
          <Route element={<IsUser />}>
            <Route path="/dashboard" element={<Dashboard />} exact></Route>
          </Route>
          <Route path="/preferences" element={<Preferences />} exact></Route>
        </Route>
        <Route
          element={<IsLogged user={!context.loginState} redirectTo={"/home"} />}
        >
          <Route path="/login" element={<LoginForm />} exact></Route>
          <Route path="/register" element={<RegisterForm />} exact></Route>
        </Route>
      </Routes>
    </>
  );
};
