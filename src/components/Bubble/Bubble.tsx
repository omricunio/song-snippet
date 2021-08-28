import classNames from "classnames";
import React, { FunctionComponent, useState } from "react";

import styles from "./Bubble.module.scss";
import { BubbleProps } from "./interfaces";

const Bubble: FunctionComponent<BubbleProps> = (props) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div
            className={classNames(
                styles.root,
                props.isCircle
                    ? styles.circle
                    : props.isRounded
                    ? styles.rounded
                    : null,
                props.isHoverEffect && isHover ? styles.optionalHover : null
            )}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {props.children}
        </div>
    );
};

export default Bubble;
