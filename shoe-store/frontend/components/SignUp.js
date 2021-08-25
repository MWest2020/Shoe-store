import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    // send the
    const res = await signup().catch(console.error);
    resetForm();
  };

  const StyledP = styled.p`
    margin: auto;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
    background: rgba(0, 0, 0, 0.02);
    border: 5px solid white;
    padding: 20px;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 600;
  `;

  if (data?.createUser) {
    return (
      <StyledP>
        Signed up with {data.createUser.email} - You can now sign in!
      </StyledP>
    );
  }

  return (
    <>
      <Error error={error} />
      {/* // don't forget to use POST method here */}
      <Form method="POST" onSubmit={handleSubmit}>
        <h2>Sign up for your account</h2>
        <fieldset>
          <label htmlFor="name">
            Your Name
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Your Name"
              value={inputs.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </label>
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
          <button type="submit">Sign Up</button>
        </fieldset>
      </Form>
    </>
  );
}
