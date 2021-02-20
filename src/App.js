import React from "react"
 import "./styles/styles.scss"
 import "./App.css"
 import Logo from "./logo.svg"

const App=()=> 
<>
<h1>Hola mundo</h1>;
<img src={Logo} className="App-logo" alt="logo"></img>

</>



export default App;


//Reglas JSX
// 1. Toda etiqueta debe cerrarse
// 2. Los componentes deben devolver un sólo elemento padre
// 3. Apoyarse de los fragmentos cuando necesito devolver dos elementos
// 4. Fragment => <> hijos </> Importar {Fragment} from "react"
// 5. Img siempre se cierra
// 6. Las clases se asignan con className
// 7. El atributo for del label pasa a ser htmlFor