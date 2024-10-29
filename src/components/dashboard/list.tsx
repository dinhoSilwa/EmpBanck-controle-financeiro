import { useTransactions } from "../../hooks/getTransactions/useTransactionsList"

export const TransactionsList = () =>{
  const {data} = useTransactions()
  
  return(
    <section>
      <table>
          <thead>
            <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            </tr>
          </thead>
          <tbody>
          
              {data && data.map(({description, amount, category, transactionType, day}, index) =>(
              
              <tr key={index}>
                  <td>{description}</td>
                  <td> {transactionType === "expense" ? "-" : null} {amount.toLocaleString('pt-BR', {style : "currency", currency :"BRL"})}</td>
                  <td>{category}</td>
                  <td>{day}</td>
              </tr>
              ))}
          
          </tbody>
          
      </table>
    </section>
  )
}