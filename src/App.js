import React,{useState} from "react";

const APIURL = "https://jsonplaceholder.typicode.com/users";
function App() {
 const [userList, setUserList] = useState([]);
 const [originalUserList, setOriginalUserList] = useState([]);
 const [sortlevel, setSortlevel] = useState('');
  const getUsers = async () => {
    const response = await fetch(APIURL);
    const data = await response.json();
    // console.log(data, typeof data);
    const users = [];
    for(let i = 0; i < data.length; i++){
      users.push(data[i]);
    }
    setUserList(users);
    setOriginalUserList(users);
    setSortlevel("1");
    //write code here
    //render the list of users
  }
  const sortList = () => {
      //write code here
      // sort the user list by name's length
      // on first click list will sorted in assending order
      if(sortlevel === '1'){
        const userNameinAssending = userList.sort((a,b)=> a.name.length - b.name.length);
        setUserList(userNameinAssending);
        console.log(originalUserList);
        setSortlevel('2');
      }
      // on second click list will be sorted in descending order
      if(sortlevel === '2'){
        const userNameinDescendingOrder = userList.sort((a,b)=> b.name.length - a.name.length);
        setUserList(userNameinDescendingOrder);
        console.log(originalUserList);
        setSortlevel('3');
      }
      // on third click default list will be rendered
      if(sortlevel === '3'){
        console.log(originalUserList);
        setUserList(originalUserList);
        setSortlevel('1');
      }
      // on fourth click again start form step 1
  }
  
  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={sortList}>Sort list </button>
      </div>
      <ul>
        {/*render the list of the users */
        sortlevel &&
         userList.map((user) =>(
           <li key = {user.id}>
           {user.name} 
           </li>
         ))
        }
      </ul>
    </main>
  )
}

export default App;