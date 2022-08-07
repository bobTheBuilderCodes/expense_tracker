import Card from "./components/Cards";
import Graph from "./components/Graph";
import Header from "./components/Header";
// import Table from "./components/Table";

function App() {
  return (
    <div className="bg-slate-50 h-screen">
      <Header />

      <div className="sm: grid grid-cols-1 md:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
      <Graph />
      {/* <Table /> */}
    </div>
  );
}

export default App;
