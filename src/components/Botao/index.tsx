import { ReactNode } from 'react'
import styles from './Botao.module.scss'

interface BotaoProps{
    children?: ReactNode
    tipo?: 'submit' | 'reset' | 'button' | undefined
    onClick?: () => void
}

export default function Botao({children, tipo = 'button', onClick}: BotaoProps) {
  return (
    <button onClick={onClick} type={tipo} className={styles.botao}>
        {children}
    </button>
  )
}
