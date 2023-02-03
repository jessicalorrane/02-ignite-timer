import { HandPalm, Play } from "phosphor-react";
import {FormProvider, useForm} from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { createContext,  useContext,  useState } from "react";


import {
    HomeContainer,
    StartCountdownButton, 
    StopCountdownButton
  } from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { Coutdown } from "./components/Countdown";
import { CyclesContext } from "../../context/CyclesContext";








const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Iforme a tarefa'),
  minutesAmount: zod
  .number()
  .min(5,'O ciclo deve ser de no mim 5 min')
  .max(60, 'O ciclo deve ser de no max 0 min.'),
})


type NewCiycleFormData = Zod.infer<typeof newCycleFormValidationSchema>



export function Home() {
  const {activeCycle , createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)
  const newCycleForm = useForm<NewCiycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

const { handleSubmit, watch, reset} = newCycleForm

function handleCreateNewCycle(data: NewCiycleFormData) {
  createNewCycle(data)
  reset()
}

const task = watch('task')
const isSubmitDisabled = !task

  return (
    <HomeContainer>
     <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
     
        
        <FormProvider {...newCycleForm}>
        <NewCycleForm />
        </FormProvider>
        <Coutdown />
        


        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle}  type="button">
          <HandPalm size={24} />
          Interromper
      </StopCountdownButton >
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            comecar
        </StartCountdownButton >
        )}
      </form>
    </HomeContainer>
  )
  }
