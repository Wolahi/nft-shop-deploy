import styles from "./dashboard.module.scss";
import { Select } from "antd";
import { NFTS } from "../../../components/NFTS/NFTS.ts";
import NFTcard from "../../../entity/NFTcard/NFTcard.tsx";
import ListIcon from "../../../assets/listIcon.svg?react";
import GridIcon from "../../../assets/gridIcon.svg?react";
import ArrowFilters from "../../../assets/arrowFilters.svg?react";
import { useState } from "react";
import ModalForm from "../../../entity/ModalForm/ui/ModalForm.tsx";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
// const Page_limit: number = 4;
// const [activePage, setActivePage] = useState<number>(0);
// const {pagItems, pagStart, pagEnd} = useMemo(() => {
//   const pageLimit = Math.ceil(NFTS.length / Page_limit);
//   let pagItems: JSX.Element[] = [];
//     for (let i = 0; i < pageLimit; i++) {
//         pagItems.push {
//             <Pagination.Item
//             key = {i}
//             active = {i === activePage}
//             onClick={() => setActivePage(i)}
//             >
//                   {i + 1}
//             </Pagination.Item>
//         }
//     }
//     const pagStart = activePage * pageLimit
//     const pagEnd = pagStart + Page_limit
//   return {pagItems, pagStart, pagEnd};
// }, [activePage, NFTS.length]);
const Dashboard = () => {
  const [sort, setSort] = useState("grid");
  const switchSort = () => {
    console.log(sort);
    setSort((cur) => (cur === "list" ? "grid" : "list"));
  };
  return (
    <div className={styles.db__body}>
      <div className={styles.db__content}>
        <div className={styles.db__headContainer}>
          <div className={styles.db__headTop}>
            <div className={styles.db__title}>Cryptographics</div>
            <ModalForm></ModalForm>
          </div>
          <div className={styles.db__headBottom}>
            <div className={styles.db__filters}>
              <Select
                defaultValue="recent"
                style={{ width: 78, height: 37 }}
                onChange={handleChange}
                options={[
                  { value: "recent", label: "Recent" },
                  { value: "earlier", label: "Earlier" },
                ]}
                suffixIcon={<ArrowFilters className={styles.db__arrow} />}
              />
              <Select
                defaultValue="lowtohigh"
                style={{ width: 101, height: 37 }}
                onChange={handleChange}
                options={[
                  { value: "lowtohigh", label: "Low to high" },
                  { value: "hightolow", label: "High to low" },
                ]}
                suffixIcon={<ArrowFilters className={styles.db__arrow} />}
              />
              <Select
                defaultValue="all"
                style={{ width: "auto", height: 37 }}
                onChange={handleChange}
                options={[
                  { value: "all", label: "All" },
                  { value: "none", label: "None" },
                ]}
                suffixIcon={<ArrowFilters className={styles.db__arrow} />}
              />
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
        <div className={styles.db__nftContainer}>
          <div className={styles.db__nfts}>
            {NFTS.map((nft) => {
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
    </div>
  );
};

export default Dashboard;
