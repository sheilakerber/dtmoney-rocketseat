import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento website 1</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Trabalho</td>
                        <td>20/02/2021</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento website 2</td>
                        <td className="deposit">R$ 5.000</td>
                        <td>Trabalho</td>
                        <td>12/07/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$ 1.000</td>
                        <td>Moradia</td>
                        <td>30/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}