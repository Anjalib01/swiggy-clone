import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return <h1>The Error is coming</h1>;
};

export default Error;
