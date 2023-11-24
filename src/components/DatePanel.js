import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import Modal from "./Modal";
import ExpenseForm from "./ExpenseForm";

function DatePanel({ date, children }) {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleExpanding = () => {
    setExpanded(!expanded);
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div>Expenses in {date.date}</div>
      <button onClick={handleModal}>Add Expense</button>
      {showModal && (
        <Modal>
          <ExpenseForm />
        </Modal>
      )}
      <div onClick={handleExpanding}>
        {" "}
        {expanded ? <GoArrowDown /> : <GoArrowLeft />}
      </div>
      <div>{expanded && children}</div>
    </div>
  );
}

export default DatePanel;
