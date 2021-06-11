import React, { FunctionComponent } from "react";

import styles from "./Header.module.scss";
import SearchBar from "./SearchBar";

const Header: FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <span className={styles.searchBar}>
                <SearchBar />
            </span>
        </div>
    );
};

export default Header;
