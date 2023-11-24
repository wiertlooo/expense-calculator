import { useFetchExpensesQuery } from "../store";

function TotalValueForDate({ date }) {
  const { data, isFetching, error } = useFetchExpensesQuery(date);
  console.log(data);

  if (isFetching) {
    return <div>Data loading...</div>;
  }
  if (error) {
    <div>Whooops! Something went wrong</div>;
  } else {
    const totalValue = data
      ? data.reduce((sum, expense) => sum + expense.value, 0)
      : 0;
    return <div className="font-bold ml-1">{totalValue} PLN</div>;
  }
}

export default TotalValueForDate;
