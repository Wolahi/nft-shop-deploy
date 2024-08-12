import { Modal } from "antd";
import AddNFTForm from "../../../features/addNFTForm/addNFTForm.tsx";

const ModalForm = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (e: boolean) => void;
}) => {
  const handleCancel = () => {
    console.log("handleCancel");
    setOpen(!open);
  };

  const handleOk = () => {
    console.log("handleOk");
    setOpen(!open);
  };

  return (
    <Modal title="New NFT" open={open} onOk={handleOk} onCancel={handleCancel}>
      <AddNFTForm />
    </Modal>
  );
};

export default ModalForm;
