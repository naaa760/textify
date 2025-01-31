"use client";

import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";

interface MenuItem {
  icon: string;
  text: string;
  href: string;
}

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems: MenuItem[] = [
    { icon: "🏠", text: "Home", href: "/" },
    { icon: "📊", text: "Insights", href: "/insights" },
    { icon: "📄", text: "Recommends", href: "/recommends" },
    { icon: "💬", text: "Messages", href: "/messages" },
  ];

  const settingsItems: MenuItem[] = [
    { icon: "👤", text: "Profile", href: "/profile" },
    { icon: "❓", text: "FAQs", href: "/faqs" },
    { icon: "📞", text: "Contact us", href: "/contact" },
    { icon: "🚪", text: "Logout", href: "/logout" },
  ];

  const handleItemClick = (text: string) => {
    setActiveItem(text);
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => (
      <Link href={item.href} key={item.text}>
        <div
          className={`${styles.menuItem} ${
            activeItem === item.text ? styles.active : ""
          }`}
          onClick={() => handleItemClick(item.text)}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.text}>{item.text}</span>
        </div>
      </Link>
    ));
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarContent}>
        <div className={styles.menuSection}>
          <h2 className={styles.sectionTitle}>Menu</h2>
          <div className={styles.menuItems}>{renderMenuItems(menuItems)}</div>
        </div>

        <div className={styles.menuSection}>
          <h2 className={styles.sectionTitle}>Settings</h2>
          <div className={styles.menuItems}>
            {renderMenuItems(settingsItems)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
