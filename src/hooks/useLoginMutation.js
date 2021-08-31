import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
export const useLoginMutation = () => {
  const [loginUser, { data, loading, error }] = useMutation(LOGIN);
  return { loginUser, data, loading, error };
};
