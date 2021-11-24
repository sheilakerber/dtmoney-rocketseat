import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal' 

export function Header(){

    // configurando o modal da aplicacao [button 'Nova transacao']
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){  //handle = interacao usuario (ex: click)
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>
                
                <Modal
                    isOpen={isNewTransactionModalOpen}
                    onRequestClose={handleCloseNewTransactionModal}
                >
                    
                    <h2>Cadastrar transacao! </h2>
                </Modal>
            </Content>
        </Container>
    )
}