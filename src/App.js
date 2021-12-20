import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Header2 from './Header.js';
//lo useEffect scandisce il ciclo di vita di un componente e dei suoi stati
import { useState, useEffect } from 'react'; //--> Hooks
import Form from './Form';
//gestione chiamate asincrone al server
import axios from 'axios';





function App() {
  //come dichiaro la variabile se uso lo useState
  //dico come si chi8ama la variabile è il metodo di set che ne muta il valore
  const [name, setName] = useState("Pippo");

  const [users, setUsers] = useState(['Michela', 'Giorgio', 'Andrea']);

  const [currentName, setCurrenteName] = useState();


  useEffect(() => {
    //mi appendo alla risopsta col .then()
    axios.get("https://polar-spire-39953.herokuapp.com/items").then((response)=>{
      console.info(response.data)
    }).catch((err) =>{
      console.info(err)
    })
  
  }, [])

  //esempio voglio tener traccia di tutte le volte che name cambia stato
  //useEffect mi da sempre una callback se varia lo stato di una variabile definite mediante lo useState
  //è come un guardiano che nota le variazioni, simile a ngOnCheck di Angular
  //lo use effect può essere affidato a dun singolo elemento o su più elementi
  //se nella parentesi quadra lascio vuole lui viene inizializzato al caricamento del component
  //è simile allo ngOnInit di angular
  useEffect(() => {
    console.log("valore di name= ", name)
  }, [name])

  //quando passo name da comp padrfe a figlio non gli sto passando solo il valore al tempo 0 ma gli sto passando lo STATO, quindi le variazioni di stato si propagano anche sul figlio.


    {/*  io posso passare un intero metodo da un padre a un figlio */}
    const parentMethod= (stringa) => {
      alert(stringa)
    }


  return (
    <div className="App">
     
     


      { /*pongo name uguale allo STATO di name presente dentro la componente App*/}
       {/*  io posso passare un intero metodo da un padre a un figlio */}
      <Header  childMethod={parentMethod} name={name} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ciao {name}
        </p>
        {/* devo tener traccia della variazione di stato altrimenti non funziona e
       ciò è possibilE farlo usando gli Hooks di react che sono metodi (es lo useState) che 
       danno la possibilità di lavorare sullo stato degli elementi che compongono una componente.
       Binding degli eventi*/}

        <button onClick={() => {
          setName("Francesco")
        }}> Cambia nome </button> <hr />

        <ul>
          {
            users.map((user) => {
              return (
                <li>{user}</li>
              )
            })
          }
        </ul>



        <button onClick={() => {

          setUsers([...users, 'Giorgia'])
        }}> Lista Utenti</button>    <hr />



        {/*dato un valore inserito in input, lo stampo a console e permetto l'aggiunta all'array quando clicco il button aggiungi nome*/}
        <input type='text' onChange={(event) => {
          setCurrenteName(event.target.value)
        }} /> <hr />
        {/*inibisco currentName se esso non è definito e in js il not defined si indica con ! 
        e possiamo fare così --> 
        
        <button disabled ={!currentName} onClick={() => {
          setUsers([...users, currentName])
        }}> Aggiungi nome </button>
        

        OPPURE possiamo scegliere cosa RENDERIZZARE IL BUTTON
        Inizio con il racchiudere tutto il mio button tra {}
        e ho due modi per renderizzare: con operatore ternario,in cui dico
        se Current name è definito, mostra button 

       { currentName ? <button  onClick={() => {
          setUsers([...users, currentName])
        }}> 
        Aggiungi nome </button>: null }
        Oppure scrivo la stessa cosa nella forma contratta:
        posso renderizzare porzioni di codice perchè react si basa sugli STATI */}

        {currentName && <button onClick={() => {
          setUsers([...users, currentName])
        }}>
          Aggiungi nome </button>}


        <Form />

        





      </header>
    </div>
  );
}

export default App;
