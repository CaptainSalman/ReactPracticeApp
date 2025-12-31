import { useState } from "react";
import ExpenseList from "./Expense-tracker/components/ExpenseList";
import ExpenseFilter from "./Expense-tracker/components/ExpenseFilter";
import Form from "./Expense-tracker/components/Form";


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 50, category: "Groceries" },
    { id: 2, description: "Movie", amount: 15, category: "Entertainment" },
  ]);
  const filteredExpenses = expenses.filter(expense => selectedCategory ? expense.category === selectedCategory : expenses);
  if (expenses.length === 0) return null;
  return (
    <div>
      <Form onSubmit={ expense => setExpenses([...expenses, { id: expenses.length + 1, ...expense }])}/>
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      <ExpenseList expenses={filteredExpenses} onDeleteExpense={(id) => {setExpenses(expenses.filter(expense => expense.id !== id))}} />
    </div>
  );
};

export default App;