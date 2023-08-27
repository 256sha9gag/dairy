import React from "react";
import Logo from "../../Logo/Logo";
import Input from "../../Input/Input";
import Selector from "../../Selector/Selector";
import Button from "../../Button/Button";
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
