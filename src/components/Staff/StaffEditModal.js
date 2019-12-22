import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import StaffEditForm from "./StaffEditForm";

const StaffModal = () => {
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
          size="small"
          icon="edit outline"
          onClick={ModalOpen}
          className="pointer"
          content="Edit"
          compact
          basic
        ></Button>
      }
    >
      <Modal.Header>Add New Appointment</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <StaffEditForm ModalClose={ModalClose} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default StaffModal;
