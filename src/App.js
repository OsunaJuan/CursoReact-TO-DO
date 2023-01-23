import React from "react";
import {TodoAPPUI} from "./componentes/TodoAPPUI"
import { TodoProvider} from "./componentes/TodoContext";

function App() {
  return (
    <TodoProvider>
      <TodoAPPUI>        
      </TodoAPPUI>
    </TodoProvider>
  );
}

export default App;
