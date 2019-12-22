import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import ServiceAddForm from "./ServiceAddForm";

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
          content="Add Service"
          basic
          primary
          icon="plus"
          onClick={ModalOpen}
        />
      }
    >
      <Modal.Header>Add New Service</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <ServiceAddForm ModalClose={ModalClose} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default StaffModal;
