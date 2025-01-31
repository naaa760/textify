"use client";

import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarContent}>
        <div className={styles.menuSection}>
          <h2 className={styles.sectionTitle}>Menu</h2>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <span className={styles.icon}>🏠</span>
              <span className={styles.text}>Home</span>
            </div>
            <div className={styles.menuItem}>
              <span className={styles.icon}>📊</span>
              <span className={styles.text}>Insights</span>
            </div>
            <div className={styles.menuItem}>
              <span className={styles.icon}>📄</span>
              <span className={styles.text}>Recommends</span>
            </div>
            <div className={styles.menuItem}>
              <span className={styles.icon}>💬</span>
              <span className={styles.text}>Messages</span>
            </div>
          </div>
        </div>

        <div className={styles.menuSection}>
          <h2 className={styles.sectionTitle}>Settings</h2>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <span className={styles.icon}>👤</span>
              <span className={styles.text}>Profile</span>
            </div>
            <div className={styles.menuItem}>
              <span className={styles.icon}>❓</span>
              <span className={styles.text}>FAQs</span>
            </div>
            <div className={styles.menuItem}>
              <span className={styles.icon}>📞</span>
              <span className={styles.text}>Contact us</span>
            </div>
            <div className={styles.menuItem}>
              <span className={styles.icon}>🚪</span>
              <span className={styles.text}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
