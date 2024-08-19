import styles from "./dashboard.module.scss";
import { Button, FloatButton, Pagination } from "antd";
import NFTcard from "../../../entity/NFTcard/NFTcard.tsx";
import ListIcon from "../../../shared/assets/dashboard/listIcon.svg?react";
import GridIcon from "../../../shared/assets/dashboard/gridIcon.svg?react";
import { useState } from "react";
import ModalForm from "../../../widgets/ModalForm/ui/ModalForm.tsx";
import SearchForm from "../../../widgets/SearchForm/ui/SearchForm.tsx";
import { FilterOutlined } from "@ant-design/icons";
import AsideDrawer from "../../../widgets/AsideDrawer/ui/AsideDrawer.tsx";
import useGetNfts from "../module/useGetNfts.ts";
import TopFilters from "../../../features/TopFilters/TopFilters.tsx";

const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { nfts, pags, changePage } = useGetNfts();
  const [sort, setSort] = useState("grid");
  const switchSort = () => {
    console.log(sort);
    setSort((cur) => (cur === "list" ? "grid" : "list"));
  };

  console.log(nfts, pags);

  return (
    <div className={styles.db__body}>
      <div className={styles.db__content}>
        <div className={styles.db__headContainer}>
          <div className={styles.db__headTop}>
            <div className={styles.db__title}>Cryptographics</div>
            <Button
              type="primary"
              onClick={() => setOpen(true)}
              className={styles.db__Btn}
            >
              <span className={styles.db__btnText}>Create New Item</span>
            </Button>
            <ModalForm open={open} setOpen={setOpen} />
          </div>
          <div className={styles.db__headBottom}>
            <TopFilters />
            <div className={styles.db__sortContainer}>
              <div className={styles.db__searchMobile}>
                <SearchForm />
              </div>
              <div className={styles.db__sort} id={sort} onClick={switchSort}>
                <div
                  className={
                    sort === "grid"
                      ? styles.db__gridSelected
                      : styles.db__gridSort
                  }
                >
                  <div>
                    <GridIcon
                      className={
                        sort === "grid"
                          ? styles.db__gridIselected
                          : styles.db__gridIcon
                      }
                    />
                  </div>
                </div>
                <div
                  className={
                    sort === "grid"
                      ? styles.db__listSort
                      : styles.db__listSelected
                  }
                >
                  <ListIcon
                    className={
                      sort == "grid"
                        ? styles.db__listIcon
                        : styles.db__listIselected
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.db__store}>
          <div
            className={
              sort == "grid"
                ? styles.db__nftContainer
                : styles.db__nftContainerList
            }
          >
            <div
              className={sort == "grid" ? styles.db__nfts : styles.db__nftsList}
            >
              {/*{NFTS.map((nft) => {*/}
              {nfts.map((nft) => {
                if (nft.id !== 0) {
                  return (
                    <div key={nft.id} className={styles.db__nftItems}>
                      <NFTcard nft={nft} sort={sort} />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className={styles.db__pagContainer}>
          <div className={styles.db__pagination}>
            <div className={styles.db__paginationFilter}>
              Results 1 - {pags.total_items}
              <div>
                <div className={styles.db__totalItems}>
                  {" "}
                  out of {pags.total_items}
                </div>
              </div>
            </div>
            <div>
              <Pagination
                align="end"
                defaultCurrent={1}
                pageSize={8}
                total={pags.total_items}
                onChange={(page) => {
                  changePage(page);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <FloatButton
        icon={<FilterOutlined />}
        type="primary"
        style={{ insetInlineEnd: 24 }}
        onClick={() => setOpenDrawer(true)}
        className={styles.db__filtersButton}
      />
      <AsideDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </div>
  );
};

export default Dashboard;
