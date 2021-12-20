import { useForm } from "react-hook-form";
import axios from "axios";

function Form(){
    /*
    Register: crea correlazione tra html form e il campo serializzato dopo il submit
    handleSubmit: è l'eventListerner che raccoglie submit e passa dati a un metodo di callBack
    formState con errors: catcha i possibili errori di compilazione del form
    */

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    

   /* const submit = (data) =>{
        console.info(data)

    }*/
    const submit2 = (data) =>{
        console.info(data)
        axios.post("https://polar-spire-39953.herokuapp.com/items", data).then(response =>{
            console.info(response.data)
        })

    }

    return(
        <>
       {/* <form onSubmit={handleSubmit(submit)}>
            <input type="text" {... register('userName', {required: true})} />
            {errors.userName && 
            <span>Campo userName è required </span>}
            <button type="submit">Invia</button>
        </form>
         */}

        <form onSubmit={handleSubmit(submit2)}>
        <input type="text" placeholder=" Produttore" {... register('produttore', {required: true})} />
        <input type="text" placeholder="nome "{... register('nome', {required: true})} />
       
        <button type="submit2">Invia Dati</button>
        </form>
        </>


        

    );

}

export default Form