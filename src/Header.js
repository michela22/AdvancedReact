
function Header(proprietà){
    return(
      <p>
        Header Works!, Hello {proprietà.name}
      </p>
    );
  }
//oppure lo puoi scrivere così, passando, invece del generico props, un oggetto
//con all'interno tutte le chiavi reòatove agli attributi che gli sto passando
//posso accedere a props name semplicemente con interpolazione name
 function Header2({name}){
    return(
    <p>
    Header Works!, Hello {name}
    </p>
    );
  }

  
  export default Header;