import { Menu, MenuProps } from "antd";

const items: MenuProps["items"] = [
  "Status",
  "Price",
  "Collections",
  "Chains",
  "Categories",
  "Sale",
].map((key, index) => {
  return {
    key,
    label: ` ${key}`,
    onClick: () => console.log("onclick"),
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const Aside = () => {
  return (
    <Menu
      mode="inline"
      style={{ height: "100%", font: "500 16px $font" }}
      items={items}
    />
  );
};

export default Aside;
