import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import Botao from '../Botao'
import styles from './Formulario.module.scss'
import { ITarefas } from '../../types/tarefas'
import {v4 as uuidv4} from 'uuid'

interface FormularioProps{
    setTarefas:Dispatch<SetStateAction<ITarefas[]>>
}

export default function Formulario({setTarefas}: FormularioProps) {
    const [novaTarefa, setNovaTarefa] = useState({tarefa: '', tempo: '00:00:00'})

    function salvarTarefa(evento: FormEvent){
        evento.preventDefault()
        setTarefas(
            tarefasAntigas =>  [...tarefasAntigas, 
                {...novaTarefa, 
                    selecionado: false, 
                    completado: false, 
                    id: uuidv4()
                }])
        setNovaTarefa({tarefa: '', tempo: '00:00:00'})
        
    } 
    return (
        <>
            <form className={styles.novaTarefa} onSubmit={(evento) => salvarTarefa(evento)}>
                <div className={styles.inputContainer}>
                    <label>Adicione um novo estudo</label>
                    <input
                    value={novaTarefa.tarefa}
                        type="text"
                        placeholder='O que você quer estudar?'
                        onChange={evento => setNovaTarefa({...novaTarefa, tarefa: evento.target.value})}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Tempo</label>
                    <input
                        value={novaTarefa.tempo}
                        type="time"
                        step='1'
                        onChange={evento => setNovaTarefa({...novaTarefa, tempo: evento.target.value})}
                    />
                </div>
                <Botao tipo='submit'>Adicionar</Botao>
            </form>
        </>
    )
}
