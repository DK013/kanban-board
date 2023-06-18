import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App h-full w-full flex flex-row overflow-hidden">
        <Sidebar />
        <div className="w-full h-auto">
          <Header />
          <Page />
        </div>
      </div>
    </Provider>
  );
}

export default App;
