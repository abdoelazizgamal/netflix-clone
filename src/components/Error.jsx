const Error = ({ title, error, style }) => {
  return (
    error && (
      <p style={{ ...style }} className="container error">
        {title ? title : "error Fetching Data.."}
      </p>
    )
  );
};

export default Error;
