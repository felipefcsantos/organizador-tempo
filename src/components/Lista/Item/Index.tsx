import { ITarefas } from '../../../types/tarefas';
import style from './Item.module.scss';

interface ItemProps extends ITarefas {
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void 
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: ItemProps) {
  return (
    <li 
      className={`${style.item} ${selecionado? style.itemSelecionado : ''} ${completado? style.itemCompletado : ''}`}
      onClick={() => !completado && selecionaTarefa({
        tarefa,
        tempo,
        completado,
        selecionado,
        id
      })}  
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
    </li>
  )
}