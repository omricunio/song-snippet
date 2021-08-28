import React, { FunctionComponent } from "react";

import styles from "./SongImage.module.scss";

interface SongImageProps {
    url: string
}

const SongImage: FunctionComponent<SongImageProps> = (props) => {
    return (
        <img
            alt=""
            className={styles.image}
            src={props.url}
        />
    );
};

export default SongImage;
