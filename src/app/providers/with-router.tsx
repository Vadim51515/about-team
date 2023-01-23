import { BrowserRouter } from "react-router-dom";

const basename =
  process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "";

export const withRouter = (component: () => React.ReactNode) => () =>
  <BrowserRouter basename={basename}>{component()}</BrowserRouter>;
