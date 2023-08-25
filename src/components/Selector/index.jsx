import React, { useState, useEffect } from "react";
import styles from "./Selector.module.css";
import { emojiIcons } from "../../Utils/icons";

function Selector(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState("");
  const handlerChange = (e) => {
    if (e.target.value) {
      setIsOpen(false);
    }
    setValue(e.target.value);
  };
  useEffect(() => {
    if (value === "") {
      setIsOpen(true);
    }
  }, [value]);
  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
        id="selectId"
        onChange={(e) => {
          handlerChange(e);
        }}
      >
        {emojiIcons.map((item, index) => (
          <option name={index} key={index}>
            {item}
          </option>
        ))}
      </select>
      {isOpen && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.selectAvatar}
        >
          <path
            d="M12 17C14.2091 17 16 15.2091 16 13H8C8 15.2091 9.79086 17 12 17Z"
            fill="#BDBDBD"
          />
          <path
            d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z"
            fill="#BDBDBD"
          />
          <path
            d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z"
            fill="#BDBDBD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
            fill="#BDBDBD"
          />
        </svg>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className={styles.selectArrow}
      >
        <path
          d="M5.28593 6.46445L4.10742 7.64296L9.99996 13.5355L15.8925 7.64298L14.714 6.46447L9.99998 11.1785L5.28593 6.46445Z"
          fill="#ACACAC"
        />
      </svg>
    </div>
  );
}

export default Selector;
