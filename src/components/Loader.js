import spinners from "../image/spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinners} alt="Loading..." />
      <h1>Fetching Data</h1>
    </div>
  );
};

export default Loader;
