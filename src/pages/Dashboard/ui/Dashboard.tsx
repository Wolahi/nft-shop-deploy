import styles from "./dashboard.module.scss";
import { Select } from "antd";
import { NFTS } from "../../../components/NFTS/NFTS.ts";
import NFTcard from "../../../entity/NFTcard/NFTcard.tsx";
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const Dashboard = () => {
  return (
    <div className={styles.db__body}>
      <div className={styles.db__content}>
        <div className={styles.db__headContainer}>
          <div className={styles.db__headTop}>
            <div className={styles.db__title}>Cryptographics</div>
            <div className={styles.db__createBtn}>Create new item</div>
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
              />
              <Select
                defaultValue="lowtohigh"
                style={{ width: 101, height: 37 }}
                onChange={handleChange}
                options={[
                  { value: "lowtohigh", label: "Low to high" },
                  { value: "hightolow", label: "High to low" },
                ]}
              />
              <Select
                defaultValue="all"
                style={{ width: 56, height: 37 }}
                onChange={handleChange}
                options={[
                  { value: "all", label: "All" },
                  { value: "none", label: "None" },
                ]}
              />
            </div>
            <div className={styles.db__sort}>
              <div>Pos</div>
              <div>Pos</div>
            </div>
          </div>
        </div>
        <div className={styles.db__nftContainer}>
          <div className={styles.db__nfts}>
            {NFTS.map((nft) => {
              if (nft.id !== 0) {
                return (
                  <div className={styles.db__nftItems}>
                    <NFTcard nft={nft} />
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
