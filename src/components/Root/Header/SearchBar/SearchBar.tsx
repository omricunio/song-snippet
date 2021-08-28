import React, { FunctionComponent, useState } from "react";

import styles from "./SearchBar.module.scss";
import { EnterOutlined, SearchOutlined } from "@ant-design/icons";
import Bubble from "../../../Bubble";
import { ENTER_KEY_NAME } from "../../../../config/default";

interface SearchBarProps {
    onSearch: (value: string) => void
}

const SearchBar: FunctionComponent<SearchBarProps> = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const search = () => {
        props.onSearch(searchValue);
    }

    return (
        <div className={styles.root}>
            <Bubble isRounded={true}>
                <div className={styles.barItems}>
                    <SearchOutlined size={50} />
                    <input
                        className={styles.input}
                        spellCheck={false}
                        placeholder="Search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={(e) =>
                            e.key === ENTER_KEY_NAME && search()
                        }                        
                    />
                    <EnterOutlined
                        className={styles.enter}
                        onClick={search}
                    />
                </div>
            </Bubble>
        </div>
    );
};

export default SearchBar;
