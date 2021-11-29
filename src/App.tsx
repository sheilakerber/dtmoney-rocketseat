import { GlobalStyle } from "./styles/globals";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')    // por questoes de acessibilidade, para falar qual eh o elemento root do modal

export function App() {
  // configurando o modal da aplicacao [button 'Nova transacao']
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){  //handle = interacao usuario (ex: click)
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen = {isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}