import { useState } from "react";
import styles from "./searchform.module.scss";
import { Input } from "antd";
import Lens from "../../../assets/Lens.svg?react";

const SearchForm = (props: any) => {
  const [value, setValue] = useState("");
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        props.putArt(value);
        setValue("");
      }}
    >
      <Input
        size="large"
        prefix={<Lens />}
        placeholder="Search artwork"
        value={value}
        className={styles.form__input}
      />
    </form>
  );
};

export default SearchForm;
