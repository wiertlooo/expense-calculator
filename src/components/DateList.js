import React from "react";
import { useFetchDatesQuery } from "../store";
import ExpenseList from "./ExpenseList";
import AddNewDate from "./AddNewDate";
import DatePanel from "./DatePanel";

function DateList() {
  const { data, error, isFetching } = useFetchDatesQuery();

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error occured when fetching dates data. :</div>;
  } else {
    content = (
      <div>
        {data.map((date) => {
          return (
            <div key={date.id}>
              <DatePanel date={date}>
                <ExpenseList date={date} />
              </DatePanel>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      <AddNewDate />
      {content}
    </div>
  );
}

export default DateList;
