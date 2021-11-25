// import { prependOnceListener } from 'process'
import { FormEvent, useState } from 'react'
import Modal  from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    const [title, setTitle] = useState('')          // estado inicial do titulo
    const [value, setValue] = useState(0)           // estado inicial do valor
    const [category, setCategory] = useState('')    // estado inicial da categoria
    const [type, setType] = useState('deposit')     // para armazenar a informac de qual botao foi selecionado
    
    // para adicionar uma nova transacao na api
    function handleNewTransaction(event: FormEvent) {
        event.preventDefault();     // previne reset do form

        // verificando os dados inseridos no form
        console.log(
            title, value, category, type
        )
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >  

            <button 
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleNewTransaction} >
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}    // salva cada nova info inserida na propriedade title
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox     // botao entrada
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox  // botao saida
                        type="button"
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}