import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const RESET_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      message
      code
    }
  }
`;

export default function Reset({ token }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    // token passed to state
    token,
  });
  // error  = errors caugth in mutation
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });
  // error succesfully
  const err = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    // send the
    const res = await reset().catch(console.error);
    resetForm();
  };

  //   const StyledP = styled.p`
  //     margin: auto;
  //     box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  //     background: rgba(0, 0, 0, 0.02);
  //     border: 5px solid white;
  //     padding: 20px;
  //     font-size: 1.5rem;
  //     line-height: 1.5;
  //     font-weight: 600;
  //   `;

  //   if (data?.createUser) {
  //     return (
  //       <StyledP>
  //         Signed up with {data.createUser.email} - You can now sign in!
  //       </StyledP>
  //     );
  //   }

  return (
    <>
      {/* // don't forget to use POST method here */}
      <Form method="POST" onSubmit={handleSubmit}>
        <h2>Reset Your Password</h2>
        <Error error={error || err} />
        <fieldset>
          {data?.redeemUserPasswordResetToken === null && (
            <p>Succes! You can now sign in with the new password.</p>
          )}
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              value={inputs.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Request Reset</button>
        </fieldset>
      </Form>
    </>
  );
}
