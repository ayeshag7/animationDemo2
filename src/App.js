import './App.css';
import { Demo } from "./components/Demo";

function App() {
  return (
    <div className="App m-12 flex flex-col gap-y-10">
      <h1 className='text-2xl font-bold'>OpenMRS Animation Demo</h1>
      <div>
          <p className='text-lg font-bold mb-4'>Demo 2</p>
          <Demo/>
      </div>
    </div>
  );
}

export default App;
