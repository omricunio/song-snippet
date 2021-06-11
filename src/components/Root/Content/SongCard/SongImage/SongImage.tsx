import React, { FunctionComponent } from "react";

import styles from "./SongImage.module.scss";

const SongImage: FunctionComponent = () => {
    return (
        <img
            alt=""
            className={styles.image}
            src={
                "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/5b/62/f1/5b62f156-49cc-2e7f-5deb-2f2cfa82a937/source/600x600bb.jpg"
            }
        />
    );
};

export default SongImage;
