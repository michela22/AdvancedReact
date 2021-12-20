import { useForm } from "react-hook-form";

function Form(){
    /*
    Register: crea correlazione tra html form e il campo serializzato dopo il submit
    handleSubmit: è l'eventListerner che raccoglie submit e passa dati a un metodo di callBack
    formState con errors: catcha i possibili errori di compilazione del form
    */

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) =>{
        console.info(data)

    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {... register('userName', {required: true})} />
            {errors.userName && 
            <span>Campo userName è required </span>}
            <button type="submit">Invia</button>
        </form>
    );

}

export default Form