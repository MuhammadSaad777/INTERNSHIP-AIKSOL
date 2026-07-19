import "./App.css";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="app">
      <h1>React Props & State</h1>

      <div className="profiles">
        <UserProfile
          name="Ali"
          role="Frontend Developer"
          imageUrl="https://i.pravatar.cc/150?img=1"
        />

        <UserProfile
          name="Sara"
          role="UI Designer"
          imageUrl="https://i.pravatar.cc/150?img=5"
        />

        <UserProfile
          name="Ahmed"
          role="Backend Developer"
          imageUrl="https://i.pravatar.cc/150?img=8"
        />
      </div>

      <Counter />

      <Toggle />
    </div>
  );
}

export default App;