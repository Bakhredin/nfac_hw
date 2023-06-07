import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Zagruzka from "./components/Zagruzka";
import Grid from "./components/Grid";

function App() {
  const [grid, setGrid] = useState([ //grid - именно он создает таблицу, которая нужна дял крестиков и ноликов
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" }, 
    { id: 9, text: "" }, // здесь "id" - это идентификатор места таблицы, а "text" - это то чем заполняется 
  ]);
  const [user, setUser] = useState(true); // user - player, true or false - first or second player

  function handlePlay(elementID) {
    //NO NO push splice pop shift unshift
    //OK map forEach slice  filter find some
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text) {  //если айди равен своему старому и в строке нет текста
        return { ...item, text: user ? "X" : "O" }; //то тогда он заменяет текст
      } else return item; //или возвращает обратно без изменении
    });
    setUser(!user); // меняет юзера, иначе будут только крестики
    setGrid(newGrid);
    
    checkWinner(newGrid)

  }

  function checkWinner(grid){
    const wincombination = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9], 
      [3, 5, 7],
    ];

 

    for(const combo of wincombination){
      const [a, b, c] = combo;
      const cellA = grid.find((item) => item.id === a);
      const cellB = grid.find((item) => item.id === b);
      const cellC = grid.find((item) => item.id === c);

      if (cellA.text && cellA.text === cellB.text && cellA.text === cellC.text) {
        return cellA.text;
      }
    }
    return null;
  }
  

  // if (!user) {
  //   return (
  //     <MainLayout>
  //       <Zagruzka />
  //     </MainLayout>
  //   );
  // }

  const winner = checkWinner(grid);

  return (
    <MainLayout>
      {winner ? (
        <div  className="flex flex-col items-center justify-center">
          <h2 className="text-center self-center">Победитель: {winner}</h2>
        </div>
      ) : (
        <Grid grid={grid} handlePlay={handlePlay} />
      )}
    </MainLayout>
  );
}

export default App;