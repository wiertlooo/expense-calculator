import { useFetchExpensesQuery } from "../store";
import ExpenseListItem from "./ExpenseListItem";

function ExpenseList() {
  const { data, error, isFetching } = useFetchExpensesQuery();
  console.log(data);

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error occured when fetching data. :(</div>;
  } else {
    content = data.map((expense) => {
      return <ExpenseListItem key={expense.id} expense={expense} />;
    });
  }
  return <div>{content}</div>;
}

export default ExpenseList;
