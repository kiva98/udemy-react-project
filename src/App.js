import React, { useState, useEffect } from "react";
import SearchBox from "./components/Searchbox/SearchBox";
import Cards from "./components/Cards/Cards";
import Scroll from "./components/Scroll/Scroll";
//import { robots } from "./robots";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");

  const [robots, setRobots] = useState([]);

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearchField(e.target.value);
    console.log(searchField);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((actualData) => setRobots(actualData))
      .catch((err) => console.log(err.message));
    console.log("called fetch");
  }, []);

  const newRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <Cards robots={newRobots} />
      </Scroll>
    </div>
  );
};

export default App;
