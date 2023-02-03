import './App.css';
import Bar from './components/Bar';


function App() {

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="app">
      <div className="container">
        {data.map((item) => (
            <Bar key={item} data={item}/>
        ))}
      </div>
    </div>
  );

}

export default App;
