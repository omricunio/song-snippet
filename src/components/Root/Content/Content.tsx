import React, { Component } from "react";

import styles from "./Content.module.scss";
import SongCard from "./SongCard";

class Content extends Component {
    render() {
        return (
            <div className={styles.root}>    
                <SongCard/>      
            </div>
        );
    }
}

export default Content;
