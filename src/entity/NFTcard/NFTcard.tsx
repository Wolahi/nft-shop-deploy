import { INFT } from "../../components/NFTS/interfaces/INFT.ts";
import styles from "../NFTcard/NFTcard.module.scss";
import NftPhoto from "../../assets/nftPhoto.png";

type NFTprops = { nft: INFT };
const NFTcard = ({ nft }: NFTprops) => {
  return (
    <div className={styles.nft__Card}>
      <div className={styles.nft__body}>
        <div className={styles.nft__cardTop}>
          <div className={styles.nft__PhotoContainer}>
            <img src={NftPhoto} alt="" className={styles.nft__Photo} />
          </div>
          <div className={styles.nft__Text}>
            <div className={styles.nft__Title}>{nft.title}</div>
            <div className={styles.nft__Author}>{nft.author}</div>
          </div>
        </div>
        <div className={styles.nft__priceBlock}>
          <div className={styles.nft__priceType}>
            {nft.priceType} <span>Price</span>
          </div>
          <div className={styles.nft__priceContainer}>
            <div className={styles.nft__blurContainer} />
            <div className={styles.nft__price}>
              {nft.price} <span>ETH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTcard;
