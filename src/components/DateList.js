import React from "react";
import { useFetchDatesQuery } from "../store";
import ExpenseList from "./ExpenseList";
import AddNewDate from "./AddNewDate";
import DatePanel from "./DatePanel";
import { useSelector } from "react-redux";

function DateList() {
  const loggedUser = useSelector((state) => state.auth.user);
  const { data, error, isFetching } = useFetchDatesQuery(loggedUser);

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error occured when fetching dates data. </div>;
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
