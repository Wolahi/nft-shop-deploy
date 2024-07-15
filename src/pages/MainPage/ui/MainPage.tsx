// import Header from "../../../widgets/Header/Header.tsx";
import styles from "./mainPage.module.scss";
import Logo from "../../../assets/header/Logo.svg?react";
import Mail from "../../../assets/mail.svg?react";
import Note from "../../../assets/note.svg?react";
import Pay from "../../../assets/pay.svg?react";
import Photo from "../../../assets/DefaultPhoto.svg?react";

import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import SearchForm from "../../../entity/SearchForm/ui/SearchForm.tsx";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["Dashboard", "About Us", "FAQ"].map(
  (key) => ({
    key,
    label: `${key}`,
  }),
);

const items2: MenuProps["items"] = [
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

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const MainPage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className={styles.main__header}>
        <div className={styles.main__leftPart}>
          <Logo></Logo>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["Dashboard"]}
            items={items1}
            className={styles.main__menu}
          />
        </div>

        <div className={styles.main__rightPart}>
          <div className={styles.main__searchbar}>
            <SearchForm />
          </div>
          <div className={styles.main__iconsContainer}>
            <div className={styles.main__iconsItems}>
              <div className={styles.main__iconsItem}>
                <Mail />
              </div>
              <div className={styles.main__iconsItem}>
                <Note />
              </div>
              <div className={styles.main__iconsItem}>
                <Pay />
              </div>
            </div>
          </div>
          <div className={styles.main__profileContainer}>
            <div className={styles.main__profilePhoto}>
              <Photo />
            </div>
            <div className={styles.main__profileName}>Habib Nurmagomedov</div>
          </div>
        </div>
      </Header>
      <Content className={styles.main__content}>
        <Layout className={styles.main__layout}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu mode="inline" style={{ height: "100%" }} items={items2} />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <div className={styles.main__shopContent}>Content</div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default MainPage;
