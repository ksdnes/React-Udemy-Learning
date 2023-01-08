import { useRef,useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { hydrate } from 'react-dom';
const MealItemForm =(props)=>{
        const amountInputRef=useRef();
        const [amountIsValid,SetAmountIsValid]=useState(true);
        const submitHandler=event=>{
            event.preventDefault();

            const enteredAmount=amountInputRef.current.value; //ref is always a string->convert it
            const enteredAmountNumber=+enteredAmount; //convert

            if(enteredAmount.trim().lenght===0 || enteredAmountNumber<1 || enteredAmountNumber>5) //validation
            {
                SetAmountIsValid(false);
                return;
            }
            
            
            props.c(enteredAmountNumber);
        };

    return(
        <form className={classes.form} onSubmit={submitHandler}> 
            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{
                id:'amount_'+props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>Add</button>
            {!amountIsValid && <p>Please Enter a valid number 1-5</p>}
        </form>
    )
}
export default MealItemForm;