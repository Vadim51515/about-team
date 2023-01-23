import { Routing } from "pages";
import { withProviders } from "./providers";
import "utils/normalize.scss";
const App = () => {
  return <Routing />;
};

export default withProviders(App);
