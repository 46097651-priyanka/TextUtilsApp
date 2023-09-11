import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  return (
    <>
      <Header />
      <Alert />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
