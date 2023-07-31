const LandingPage = ({ color }) => {
  console.log("I am in the component ", color);
  return (
    <h1>Landing Page</h1>
  )
}

LandingPage.getInitialProps = () => {
  // executes from server
  console.log("I am on th server");

  return {
    color: 'red'
  };
}

export default LandingPage;