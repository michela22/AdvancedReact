
function Header(proprietà){
    return(
      <p>
        Header Works!, Hello {proprietà.name}

        <button onClick={() =>{
      proprietà.childMethod('Stringa del figlio')
       }}>Invoca metodo del padre:</button>

      </p>
    );
  }
//oppure lo puoi scrivere così, passando, invece del generico props, un oggetto
//con all'interno tutte le chiavi reòatove agli attributi che gli sto passando
//posso accedere a props name semplicemente con interpolazione name

/* function Header2({name,childMethod}){
    return(
      
    <p>
    Header Works!, Hello {name}
    </p>
     );
  }
    */
  
  
  export default Header;