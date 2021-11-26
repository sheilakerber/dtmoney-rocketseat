import { createContext, useState, useEffect, ReactNode } from 'react'
import { api } from "./services/api";

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
// solucao 2 para a TransactionInput
//type TransactionInput = Pick<Transaction, 'title' |  'amount' |  'type' | 'category'>

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider( {children}: TransactionsProviderProps ) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))   //apresentando as transacoes no html
    }, []);

    async function createTransaction(transaction: TransactionInput) {
        await api.post('./transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}