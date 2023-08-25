import React from "react";
import Logo from "../../Logo";
import Input from "../../Input";
import Selector from "../../Selector";
import Button from "../../Button";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.mainBlock}>
          <Logo />
          <form className={styles.mainBlockInput}>
            <Input />
            <Selector />
          </form>
        </div>
        <Button />
      </header>
    </>
  );
}

export default Header;
