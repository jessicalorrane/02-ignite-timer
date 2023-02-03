
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../context/CyclesContext";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";



export function NewCycleForm() {
  
  const { activeCycle } = useContext(CyclesContext)
  const {register} = useFormContext()

    return (
       
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em </label>
          <TaskInput 
           id="task" 
           list="task-suggestions"
           placeholder="De um nome para seu projeto"
           disabled={!!activeCycle}
           {...register('task')}
           />



          <datalist id="task-suggestions">
            <option value="projeto 1"/>
            <option value="projeto 2"/>
            <option value="projeto 3"/>
            <option value="projeto 4"/>
          </datalist>


          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput 
            type="number"
            id="minutesAmount" 
            placeholder="00"
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register('MinutesAmount', {valueAsNumber:true})}

          />
          <span>minutos.</span>
        </FormContainer>
    )
}