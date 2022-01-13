// IMPORT lIBRARIS
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
// IMPORT CUSTOM CSS
import "./assets/css/stylesheet.css";
//STORE
import { Provider } from "react-redux";
import store from "./store/store";
//IMPORT COMPONENTS
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
