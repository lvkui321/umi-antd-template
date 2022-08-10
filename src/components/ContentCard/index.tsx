import React from "react";
import styles from "./index.less"

interface ContentCardProps {
    title: string | React.ReactNode;
    extra?: React.ReactNode;
    children?: React.ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = (props) => {
    const { title, extra, children } = props;
    return <div>
        <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            {extra}
        </div>
        {children}
    </div>
}

export default ContentCard