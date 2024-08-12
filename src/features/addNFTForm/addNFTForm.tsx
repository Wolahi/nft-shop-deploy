import { Input } from "antd";
import styles from "./addnftform.module.scss";

const AddNftForm = () => {
  return (
    <form className={styles.addnft__form}>
      <Input
        size="middle"
        placeholder="title"
        className={styles.addnft__input}
      />
      <Input
        size="middle"
        placeholder="author"
        className={styles.addnft__input}
      />
      <Input
        size="middle"
        placeholder="type"
        className={styles.addnft__input}
      />
      <Input
        size="middle"
        placeholder="price type"
        className={styles.addnft__input}
      />
      <Input
        size="middle"
        placeholder="price"
        className={styles.addnft__input}
      />
    </form>
  );
};

export default AddNftForm;
