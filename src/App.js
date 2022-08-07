import Graph from "./components/Graph";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./app/store";
import TotalExpensesCard from "./components/TotalExpenses";
import AmountSavedCard from "./components/AmountSavedCard";
import TotalIncomeCard from "./components/TotalIncomeCard";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-slate-50 h-screen">
        <Header />
        <div className="sm: grid grid-cols-1 md:grid-cols-3">
          <TotalIncomeCard />
          <TotalExpensesCard />
          <AmountSavedCard />
        </div>
        <Graph />
      </div>
    </Provider>
  );
}

export default App;
