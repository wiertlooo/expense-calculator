import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import Modal from "./Modal";
import ExpenseForm from "./ExpenseForm";
import TotalValueForDate from "./TotalValueForDate";
import { GoTrash } from "react-icons/go";
import { useRemoveDateMutation } from "../store";

function DatePanel({ date, children }) {
  const [removeDate] = useRemoveDateMutation();
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleExpanding = () => {
    setExpanded(!expanded);
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const handleDateRemove = () => {
    removeDate(date);
  };

  return (
    <div>
      <div className="bg-gray-400 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div
            onClick={handleDateRemove}
            className="mr-1 text-xl cursor-pointer"
          >
            <GoTrash />
          </div>
          <div>Expenses in {date.date}: </div>
          <TotalValueForDate date={date} />
        </div>
        <div className="flex items-end">
          <div className="text-3xl cursor-pointer" onClick={handleModal}>
            {" "}
            <GoPlus />
          </div>
          {showModal && (
            <Modal onClose={handleClose}>
              <ExpenseForm date={date} />
            </Modal>
          )}

          <div
            className="ml-4 mb-1 text-2xl cursor-pointer"
            onClick={handleExpanding}
          >
            {" "}
            {expanded ? <GoArrowDown /> : <GoArrowLeft />}
          </div>
        </div>
      </div>
      <div className="bg-gray-300">{expanded && children}</div>
    </div>
  );
}

export default DatePanel;
