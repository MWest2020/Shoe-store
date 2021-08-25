import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <>
        <p>Sorry! You must have taken a wrong turn. Please provide a token</p>
        <RequestReset />
      </>
    );
  }

  return (
    <div>
      <p>RESET YOUR PASSWORD</p>
      <Reset token={query.token} />
    </div>
  );
}
