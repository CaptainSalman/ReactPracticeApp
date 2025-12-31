import React from "react";

interface expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: expense[];
  onDeleteExpense: (id: number) => void;
}

const ExpenseList = ({ expenses, onDeleteExpense }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDeleteExpense(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{expenses.reduce((acc, expense) => acc + expense.amount, 0)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
