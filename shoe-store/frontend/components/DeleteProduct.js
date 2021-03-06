import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DELETE_MUTATION_QUERY = gql`
  mutation DELETE_MUTATION_QUERY($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

const update = (cache, payload) => {
  console.log(payload);
  cache.evict(cache.identify(payload.data.deleteProduct));
};

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_MUTATION_QUERY, {
    variables: { id },
    update,
  });
  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm('Are you sure you want to delete this item?')) {
          // Delete after confirmation
          deleteProduct().catch((err) => alert(err.message));
        }
        // location.reload();
      }}
    >
      {children}
    </button>
  );
}
