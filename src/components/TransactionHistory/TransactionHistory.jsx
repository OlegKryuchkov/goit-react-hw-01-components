import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tr} key={id}>
            <td className={css.td}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};