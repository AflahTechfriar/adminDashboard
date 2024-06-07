
import { NextPage } from "next";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMoveOutline } from "react-icons/io5";

import styles from './testing.module.scss';
interface TableProps {
    mainHeading?: string;
    subHeading: string;
    data: {
        Column1: string;
        Column2: string;
        Column3: string;
    }[];
};
const Testing: NextPage<TableProps> = ({ mainHeading, subHeading, data }) => {

    return (<>
        <div className={styles.body}>

            <div className={styles.boxWrapper}>

                {mainHeading && <p>{mainHeading}</p>}
                <div className={styles.wrapper}>
                    <div className={styles.hovericons}>
                        <IoMoveOutline />
                        <LiaTimesSolid />
                    </div>
                    <p>{subHeading}</p>
                    {data.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.id}>{item.Column1}</div>
                            <div className={styles.name}>{item.Column2}</div>
                            <div className={styles.amount}>{item.Column3}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
    );
};

export default Testing;
