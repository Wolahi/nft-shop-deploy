// import Header from "../../../widgets/Header/Header.tsx";
import styles from "./layout.module.scss";
import Logo from "../../../../shared/assets/header/Logo.svg?react";
import Mail from "../../../../shared/assets/layout/mail.svg?react";
import Note from "../../../../shared/assets/layout/note.svg?react";
import Pay from "../../../../shared/assets/layout/pay.svg?react";
import Photo from "../../../../shared/assets/layout/DefaultPhoto.svg?react";

import type { MenuProps } from "antd";
import { Layout as LayoutAntd, Menu, theme } from "antd";
import SearchForm from "../../../../widgets/SearchForm/ui/SearchForm.tsx";
import { useTheme } from "../../../module/hooks/useTheme/useTheme.ts";
import { Outlet, useLocation, useNavigate } from "react-router";
import { clsx } from "clsx";
import Footer from "../../../../widgets/Footer/ui/Footer.tsx";
import Aside from "../../../../features/Aside/ui/Aside.tsx";

const { Header, Content, Sider } = LayoutAntd;

const withBgPages = ["/", "/about", "/"];

const Layout = (): React.ReactElement => {
  const { pathname } = useLocation();
  const { currTheme, setTheme } = useTheme();
  const navigate = useNavigate();
  const handleTheme = () => {
    if (currTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const items1: MenuProps["items"] = [
    {
      key: "/",
      label: "Dashboard",
      onClick: () => navigate("/"),
    },
    {
      key: "/about",
      label: "About Us",
      onClick: () => navigate("/about"),
    },
    {
      key: "/faq",
      label: "FAQ",
      onClick: () => navigate("/faq"),
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <main
      id="main"
      className={clsx(styles.root, {
        [styles.rootBg]: withBgPages.includes(pathname),
      })}
    >
      <LayoutAntd>
        <Header className={styles.main__header}>
          <div className={styles.main__leftPart}>
            <Logo className={styles.main__logo}></Logo>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["Dashboard"]}
              items={items1}
              selectedKeys={[pathname]}
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
                  <Mail className={styles.main__icon} />
                </div>
                <div className={styles.main__iconsItem} onClick={handleTheme}>
                  <Note className={styles.main__icon} />
                </div>
                <div className={styles.main__iconsItem}>
                  <Pay className={styles.main__icon} />
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
          <LayoutAntd className={styles.main__layout}>
            <Sider style={{ background: colorBgContainer }} width={200}>
              <Aside />
            </Sider>
            <Content>
              <Outlet />
            </Content>
          </LayoutAntd>
        </Content>
      </LayoutAntd>
      <Footer />
    </main>
  );
};

export default Layout;
