import React, { Component } from "react";

import styles from "./SearchBar.module.scss";
import { SearchOutlined } from '@ant-design/icons';

class SearchBar extends Component {
    render() {
        return (
            <div className={styles.root}>
                <SearchOutlined size={50} />
                <input className={styles.input} spellCheck={false} placeholder="Search"/>
            </div>          
        );
    }
}

export default SearchBar;
