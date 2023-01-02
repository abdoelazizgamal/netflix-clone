const GetStartedLogin = ({ ToggleSign }) => {
  return (
    <>
      <h2>UnLimited Films , TV Programmers and more.</h2>
      <h3>Watch any Where. Cancel at any time.</h3>
      <h4>
        Ready to watch ? Enter Your Email to create or restart your membership.
      </h4>
      <div className="loginScreen__input">
        <form action="">
          <input type="email" placeholder="Email Address" />
          <button
            className="loginScreen__getStarted"
            onClick={() => ToggleSign(true)}
          >
            Get Started
          </button>
        </form>
      </div>
    </>
  );
};

export default GetStartedLogin;
