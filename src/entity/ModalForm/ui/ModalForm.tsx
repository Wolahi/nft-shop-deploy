import { Button, Input, Modal } from "antd";
import styles from "./modalForm.module.scss";
import { useState } from "react";

const ModalForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <form>
      <Button type="primary" onClick={showModal} className={styles.form__Btn}>
        <span className={styles.form__btnText}>Create New Item</span>
      </Button>
      <Modal
        title="New NFT"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          size="middle"
          placeholder="photo"
          className={styles.form__input}
        />
        <Input
          size="middle"
          placeholder="title"
          className={styles.form__input}
        />
        <Input
          size="middle"
          placeholder="author"
          className={styles.form__input}
        />
        <Input
          size="middle"
          placeholder="type"
          className={styles.form__input}
        />
        <Input
          size="middle"
          placeholder="price type"
          className={styles.form__input}
        />
        <Input
          size="middle"
          placeholder="price"
          className={styles.form__input}
        />
      </Modal>
    </form>
  );
};

export default ModalForm;
