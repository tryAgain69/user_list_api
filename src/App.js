import UsersList from './Components/Userlist';
import './CSS/Card.css'
import './CSS/Details.css'
import './CSS/Load.css'
import Details from './Components/Details';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <h1 className='TitleApp'>List of users</h1>
      
       <Routes>
       <Route path="/" element={<UsersList />} />
       <Route path="/details/:id" element={<Details />} />
       </Routes>
    </div>
  );
}

export default App;