import { useMutation, gql } from "@apollo/client";

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const useToggleLikeMutation = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] =
    useMutation(LIKE_PHOTO);
  return { mutation, mutationLoading, mutationError };
};
