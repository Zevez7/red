import React, { useState } from "react";
import { Modal, Icon } from "semantic-ui-react";
import EditForm from "./EditForm";

const EditModal = props => {
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
          <EditForm ModalClose={ModalClose} itemData={props.itemData} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default EditModal;
