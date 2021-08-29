import "./App.css";

import Header from "./components/Header";
import NoteList from "./components/NoteList";
import Form from "./components/Form";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Form />
      <NoteList />
    </div>
  );
}

export default App;
