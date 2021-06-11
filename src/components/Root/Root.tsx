import React, { FunctionComponent } from "react";
import Content from "./Content";
import Header from "./Header";

import styles from "./Root.module.scss";

const Root: FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <Header />
            <Content />
        </div>
    );
};

export default Root;
