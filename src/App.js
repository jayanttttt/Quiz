import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  const options = [
    {
      id: 0,
      name: "Data Analysis",
      data: "Data Analysis",
    },
    {
      id: 1,
      name: "User’s feedback",
      data: "User’s feedback",
    },
    {
      id: 2,
      name: "Copy from similar product",
      data: "Copy from similar product",
    },
    {
      id: 3,
      name: "Make a questionary",
      data: "Make a questionary",
    },
    {
      id: 4,
      name: "Personal feeling",
      data: "Personal feeling",
    },
  ];
  const [answer, setAnswer] = useState([]);
  const [ids, setIds] = useState(0);
  const handleAnswer = (selected) => {
    setIds(ids + 1);
    let newAns = {
      ans: selected,
      id: ids,
    };
    let newAnswr = answer.concat(newAns);
    setAnswer(newAnswr)
  }
  const clear = () => {
    setAnswer([])
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/question1' element={<Question1 handleAnswer={handleAnswer} options={options} />} />
          <Route path='/question2' element={<Question2 handleAnswer={handleAnswer} options={options} />} />
          <Route path='/question3' element={<Question3 handleAnswer={handleAnswer} options={options} />} />
          <Route path='/result' element={<Result answer={answer} clear={clear} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
