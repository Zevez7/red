import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import AddForm from "./ApptAddForm";
const addModal = {
  Button: {
    borderRight: "1px solid rgba(34,36,38,.15)",
    width: 120,
    padding: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

const AddModal = props => {
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
          style={addModal.Button}
          content="ADD APPT"
          basic
          color="green"
          icon="plus"
          size="mini"
          onClick={ModalOpen}
        />
      }
    >
      <Modal.Header>Add New Appointment</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddForm ModalClose={ModalClose} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default AddModal;
