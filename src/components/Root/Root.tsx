import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";

import styles from "./Root.module.scss";

class Root extends Component {
    render() {
        return (
            <div className={styles.root}> 
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default Root;
