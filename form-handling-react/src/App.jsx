import RegistrationForm from './components/RegistrationForm';
 import FormikForm from './components/FormikForm.jsx'; 
import './App.css'; // Assuming you use App.css for basic styling

function App() {
  return (
    <div className="App">
      <h1>ALX Form Handling Project</h1>
      <RegistrationForm />
      <hr style={{ margin: '40px 0' }}/>
      <FormikForm />
    </div>
  );
}

export default App;
