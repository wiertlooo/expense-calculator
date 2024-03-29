import { useFetchExpensesQuery } from "../store";
import ExpenseListItem from "./ExpenseListItem";

function ExpenseList({ date }) {
  const { data, error, isFetching } = useFetchExpensesQuery(date);

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error occured when fetching dates data. :(</div>;
  } else {
    content = (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((expense) => (
          <ExpenseListItem key={expense.id} expense={expense} />
        ))}
      </div>
    );
  }
  return <div>{content}</div>;
}

export default ExpenseList;
