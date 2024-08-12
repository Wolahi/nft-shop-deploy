import { Button, Drawer, Space } from "antd";
import Aside from "../../Aside/ui/Aside.tsx";

const AsideDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (e: boolean) => void;
}) => {
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Filters"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div>
          <Aside />
        </div>
      </Drawer>
    </>
  );
};

export default AsideDrawer;
