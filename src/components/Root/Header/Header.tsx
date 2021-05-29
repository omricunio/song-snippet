import React, { Component } from "react";

import styles from "./Header.module.scss";
import SearchBar from "./SearchBar";

class Header extends Component {
    render() {
        return (
            <div className={styles.root}>
                <span className={styles.searchBar}>
                    <SearchBar />
                </span>
            </div>
        );
    }
}

export default Header;
