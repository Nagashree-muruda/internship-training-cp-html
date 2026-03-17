import logo from './logo.svg';
import './App.css';
import Test from './Component/Test';
import User from './Component/User';
import Greetings from './Component/Greetings';
import UserList from './Component/UserList';
function App() {

  const users = [
    { id:1, name: 'Jacob Dennis', age: 25 },
    { id:2, name: 'Jane Doe', age: 30 },
    { id:3, name: 'John Smith', age: 28 }
  ]

  return (
    <>
      <UserList users={users} />
      
    </>
  );
}

export default App;
