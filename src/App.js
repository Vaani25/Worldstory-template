import './App.css';
import {Outlet} from 'react-router-dom';
import Header, {Navbar} from './components/comp1';

function App() {
  return (
    <>
      <Navbar />
      <>
        <Outlet />
      </>
    </>

  );
}

export default App;

export const AppChild = () => {
  return (
    <Header />
  )
}
