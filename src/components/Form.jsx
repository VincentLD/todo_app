import { useState } from "react";

const Form = (props) => {
    
    const {onAdd} = props;

    const [value, setValue] = useState('');

    const handleChanged = (evt) => {
        setValue(evt.target.value) 
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAdd(value);
    }

    return <form onSubmit={handleSubmit}>
    <input
        onChange = {handleChanged}
        value = {value}
        className="new-todo"
        placeholder="Qu'avez-vous à faire ?"
        autoFocus
    />
    <input className="hidden" type="submit" value="Ajouter" />
  </form>
}

export default Form;