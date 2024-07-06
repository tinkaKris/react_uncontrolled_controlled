import UncontrolledEvent from "./components/UncontrolledEvent.tsx";
import UncontrolledUseRef from "./components/UncontrolledUseRef.tsx";
import Controlled from "./components/Controlled.tsx";
import Users from "./components/Fetching-with-axios/Users.tsx";

const App = () => {
  return (
    <div>
      <div className="App">
        <UncontrolledEvent />
        <UncontrolledUseRef />
        <Controlled />
      </div>
      <div className="container">
        <Users />
      </div>
    </div>
  );
};

export default App;
