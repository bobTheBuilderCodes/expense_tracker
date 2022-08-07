import Card from "./components/Cards";
import Graph from "./components/Graph";
import Header from "./components/Header";

import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-slate-50 h-screen">
        <Header />

        <div className="sm: grid grid-cols-1 md:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
        <Graph />
      </div>
    </Provider>
  );
}

export default App;
