import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.headContent}>Type</th>
          <th className={css.headContent}>Amount</th>
          <th className={css.headContent}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {transactions.map((transaction) => (
          <tr className={css.bodyItem} key={transaction.id}>
            <td className={css.bodyContent}>{transaction.type}</td>
            <td className={css.bodyContent}>{transaction.amount}</td>
            <td className={css.bodyContent}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
