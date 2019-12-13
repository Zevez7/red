import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import StaffForm from "./StaffForm";
const style = {
  Button: {
    borderRight: "1px solid rgba(34,36,38,.15)",
    width: 120,
    padding: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

const StaffModal = props => {
  const [modalOpenStatus, setModalOpenStatus] = useState(false);

  const ModalClose = () => {
    setModalOpenStatus(false);
  };
  const ModalOpen = () => {
    setModalOpenStatus(true);
  };

  return (
    <Modal
      closeIcon
      onClose={ModalClose}
      open={modalOpenStatus}
      trigger={
        <Button
          style={style.Button}
          content="Add Staff"
          basic
          primary
          icon="plus"
          // size="mini"
          onClick={ModalOpen}
        />
      }
    >
      <Modal.Header>Add New Appointment</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <StaffForm ModalClose={ModalClose} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default StaffModal;
