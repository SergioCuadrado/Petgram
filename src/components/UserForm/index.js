import React from "react";
import { useInputValue } from "../../hooks/useInputValue";

import { Form, Button, Input, Title, Error, Spinner } from "./styles";
/* import { SubmitButton } from "../SubmitButton"; */

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue("");
  const password = useInputValue("");
  /* Es lo mismo que hacer esto con lo de {...email},  value={email.value}
        onChange={email.onChange} */

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          required
          disabled={disabled}
          placeholder="Email"
          type="email"
          {...email}
        />
        <Input
          required
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />
        {disabled ? (
          <Button disabled={disabled}>
            <Spinner />
          </Button>
        ) : (
          <Button disabled={disabled}>{title}</Button>
        )}
        {error && <Error>{error}</Error>}
      </Form>
    </>
  );
};
