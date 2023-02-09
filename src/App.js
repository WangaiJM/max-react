import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text="Learn React" />
      <Todo text="Explore the power of react" />
      <Todo text="Integrate to django" />
    </div>
  );
}

export default App;
