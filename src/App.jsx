import UserCard from "./components/UserCard/UserCard";
import { useEffect, useState } from "react";

function App() {

  const [GithubData, setGithubData] = useState([]);
  const [StyleData, setStyleData] = useState("");

  const fetchData = async(user) => {
    const apiResponse = await fetch(`https://api.github.com/users/${user}`);
    const data = await apiResponse.json();
    console.log(data);
    if(data.status === 404) {
      return;
    } else {
      setGithubData(data);
    }
  }

  async function fetchStyles(username) {
    const data = await fetch(`https://raw.githubusercontent.com/${username}/${username}/main/profile.css`)
    const style = await data.text();
    console.log(style);
    if(data.status === 404) {
      return;
    } else {
      setStyleData(style);
    }
}

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const username = queryParams.get("username") || null;
    if(username === null) {
      window.location.assign("https://github.com/maxi-schaefer/gitpulse");
    } else {
      fetchData(username).catch(console.error);
      fetchStyles(username).catch(console.error);
    }
  }, [])

  return (
    <>
      <style>
        {StyleData}
      </style>
      <div className="container">
        <UserCard data={GithubData}/>
      </div>
    </>
  );
}

export default App;
