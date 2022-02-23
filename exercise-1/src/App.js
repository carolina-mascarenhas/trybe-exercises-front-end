import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const newArr = ['atividade física', 'estudar', 'aula ao vivo', 'exercicios', 'descançar'];

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Lista de Tarefas:</h1>
        {Task('fazer exercicios da trybe')}
        {
          newArr.map((each) => Task(each))
        }
      </div>
    )
  }
}

export default App;
