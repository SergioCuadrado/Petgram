import { gql, useMutation } from "@apollo/client";
// Registrar el usuario y creando un JSON Web Token
const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
export const useRegisterMutation = () => {
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER);
  return { registerMutation, data, loading, error };
};
