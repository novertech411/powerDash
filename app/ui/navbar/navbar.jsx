"use client";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
  MdShare,
} from "react-icons/md";
import React from "react";
import { usePathname } from "next/navigation";

const navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()} </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdShare />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icon}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default navbar;
