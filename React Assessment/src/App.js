import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [users, setUsers] = useState([]);
  let [count, setBtnCount] = useState(0);
  // feel freeto set the number of users to be displayed
  const numberOfUsers = 5;
  const url = `https://randomuser.me/api/?results=${numberOfUsers}`;
  useEffect(() => {
    getUsersList();
  }, [count]);

  async function getUsersList() {
    let userData;
    try {
      const response = await fetch(url);
      userData = await response.json();
    } catch (error) {
      console.log(error);
      userData = [];
    }

    setUsers(userData.results);
  }
  function userRefresh() {
    setBtnCount(count++);
    setBtnCount(count++);
  }
  return (
    <div className="App">
      <div className="btn">
        <button onClick={userRefresh}>Click to refresh</button>
      </div>
      <div className="cards-container">
        {users.map((user, index) => (
          <Card key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
