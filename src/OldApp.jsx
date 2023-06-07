import { useState } from "react";

import Button from "./components/Button";
import Zagruzka from "./components/Zagruzka";

function App() {
  const [user, setUser] = useState(true);

  const longList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function handleChangeUser() {
    setUser(!user);

    console.log(user);
  }

  const listItems = longList.map((listItem, index) => (
    <Button key={listItem} handleChangeUser={handleChangeUser}>
      {listItem} {index}
    </Button>
  ));

  return (
    <>
      <div className="tesst1">
        {listItems}
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {user ? <Button handleChangeUser={handleChangeUser} /> : <Zagruzka />}
      </div>
      <div className="tesst2">second div</div>
    </>
  );
}

export default App;

// import ChtoUgodno,{b} from './StrangeNumbers.js';

// // StrangeNumbers.js
// const a = 3;
// export const b =6;

// export default a;
