import { component$, useSignal, $ } from "@builder.io/qwik";
import { LuMenu, LuXSquare } from "@qwikest/icons/lucide";
import styles from "./navbar.module.css";

export default component$(() => {
  const showSideNav = useSignal(false);

  const toggleSideNav = $(() => {
    showSideNav.value = !showSideNav.value
  });

  return (
    <div>
      <button class={styles.toggleBtn} onClick$={toggleSideNav}>
        <LuMenu />
      </button>
      <div class={`${styles.sidenav} ${showSideNav.value ? styles.open: ""}`}>
        <button class={styles.closeBtn} onClick$={toggleSideNav}>
          <LuXSquare />
        </button>
        <ul class={styles["nav-list"]}>
          <li><a href="#">CIDR Utilities</a></li>
          <ul>
            <li><a href="#">CIDR contains CIDR</a></li>
          </ul>
        </ul>
      </div>
    </div>
  );
});
