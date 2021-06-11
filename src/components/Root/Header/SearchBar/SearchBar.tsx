import React, { FunctionComponent } from "react";

import styles from "./SearchBar.module.scss";
import { EnterOutlined, SearchOutlined } from "@ant-design/icons";
import Bubble from "../../../Bubble";

const SearchBar: FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <Bubble isRounded={true}>
                <div className={styles.barItems}>
                    <SearchOutlined size={50} />
                    <input
                        className={styles.input}
                        spellCheck={false}
                        placeholder="Search"
                    />
                    <EnterOutlined />
                </div>
            </Bubble>
        </div>
    );
};

export default SearchBar;
