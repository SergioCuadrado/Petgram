import React, { useContext } from "react";
import { Context } from "../Context";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { useLoginMutation } from "../hooks/useLoginMutation";

import { UserForm } from "../components/UserForm";

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  const { registerMutation, data, loading, error } = useRegisterMutation();
  const {
    loginUser,
    data: dataLog,
    error: errorLog,
    loading: loadingLog,
  } = useLoginMutation();

  const errorMsg = error && "🐾 El usuario ya existe.";
  const errorMsgLog = errorLog && "🐾 Usuario/contraseña incorrecto.";

  const registerSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const loginSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    loginUser({ variables }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  return (
    <>
      <UserForm
        disabled={loading}
        error={errorMsg}
        onSubmit={registerSubmit}
        title="Registrarse"
      />
      <UserForm
        disabled={loadingLog}
        error={errorMsgLog}
        onSubmit={loginSubmit}
        title="Iniciar sesión"
      />
    </>
  );
};

export default NotRegisteredUser;

/* 
import React, { useContext } from "react";
import Context from "../Context";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { useLoginMutation } from "../hooks/useLoginMutation";

import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  const { registerMutation, data, loading, error } = useRegisterMutation();
  const {
    loginUser,
    data: dataLog,
    error: errorLog,
    loading: loadingLog,
  } = useLoginMutation();

  const errorMsg = error && "🐾 El usuario ya existe.";
  const errorMsgLog = errorLog && "🐾 Usuario/contraseña incorrecto.";

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const registerSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          registerMutation({ variables }).then(({ data }) => {
            const { signup } = data;
            activateAuth(signup);
          });
        };

        const loginSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          loginUser({ variables }).then(({ data }) => {
            const { login } = data;
            activateAuth(login);
          });
        };

        return (
          <>
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={registerSubmit}
              title="Registrarse"
            />
            <UserForm
              disabled={loadingLog}
              error={errorMsgLog}
              onSubmit={loginSubmit}
              title="Iniciar sesión"
            />
          </>
        );
      }}
    </Context.Consumer>
  );
};
 */
