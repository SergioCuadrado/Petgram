import React, { useContext, Suspense } from "react";
import { Router, Redirect } from "@reach/router";
import { Context } from "./Context";

import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";

import { GlobalStyle } from "./styles/GlobalStyles";

// Lazy hace que no se carguen todas las paginas al inicio de entrar en la pagina, sino cuando este redirigiendo a la pagina que quiere. FALLBACK es lo que nos renderizara mientras esta cargando el componente. De esta forma mejoraremos el tiempo de carga de nuestra aplicación enormemente.
const Home = React.lazy(() => import("./pages/Home"));
const Favs = React.lazy(() => import("./pages/Favs"));
const Detail = React.lazy(() => import("./pages/Detail"));
const User = React.lazy(() => import("./pages/User"));
const NotRegisteredUser = React.lazy(() => import("./pages/NotRegisteredUser"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export const App = () => {
  const { isAuth } = useContext(Context);
  // 'Suspense' nos va a permitir renderizar algo mientras un componente esta en modo suspension, quiere decir que aun no esta cargado aun no esta listo para renderizarse.
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <Navbar />
    </Suspense>
  );
};
