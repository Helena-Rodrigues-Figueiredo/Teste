import React from "react";

const tarefas = ['café', 'academia', 'compras', 'estudar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (<ul>{ tarefas.map((tarefa) => Task(tarefa))}</ul>)
  }
}

export default App;
