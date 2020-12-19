import logo from './logo.svg';
import './App.css';

function App() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
/*
* Objeto
*
*   const user = {
*       userName: "Lucia",
*       userAge: 45,
*       favoriteColor: "Morado",
*    }
*
* Ejemplo con Objeto
*
* <Saludar userInfo = {user} />
*
* Variables
*
*   const name = "Uriel";
*   const age = 13;
*
* Ejemplo con variables
* <Saludar name = {name} age = {age} />
*
*
*
* Ejemplo con Strings
* <Saludar name = "Porfirio" age = "17"/>
* <Saludar name = "Mario" age = "90"/>
*/

/*
function App() {

    //Si quitamos  el nombre, se reemplazará por "Anonimo"
    const user = {
        userName: "Porfirio",
        userAge: 17,
        favoriteColor: "negro",
    };

    const saludarFn = (name, age, color) => {
        console.log("Hola", name,"tu edad es de:", age,"y tu color favorito es", color);
        //Ademas cambia la edad a String :O
        console.log(`Hola ${name}, tu edad es de: ${age} y tu color favorito es ${color}`);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Saludar userInfo = {user} saludarFn = {saludarFn} />
            </header>
        </div>
    );
}
*/