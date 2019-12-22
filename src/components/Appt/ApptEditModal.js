import React, { useState } from "react";
import { Modal, Icon } from "semantic-ui-react";
import ApptEditForm from "./ApptEditForm";

const ApptEditModal = props => {
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
        <div onClick={ModalOpen} className="pointer w-100 h-100">
          <Icon name="edit outline" />
        </div>
      }
    >
      <Modal.Header>Edit Appointment</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <ApptEditForm ModalClose={ModalClose} itemId={props.itemId} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ApptEditModal;
