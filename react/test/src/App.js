// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Hello from "./hello";

// const App = () => {
//   return (
//     <div className="App">
//       <Hello />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://api.icndb.com/jokes/")
      .then((res) => {
        setJokes(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) : (
          jokes.value.map((fact) => (
            <li class="joke" id={fact.id}>
              {fact.joke}
            </li>
          ))
        )}
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
};
export default App;
