import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import styles from "./appList.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMoveOutline } from "react-icons/io5";

// Define prop types   
interface TableProps {
  mainHeading: string;
  tableHeaders: string[];
  data: {
    Image?: string | StaticImageData;
    Column1: string;
    Column2: string;
    Column3: string;
    Column4: string;
  }[];
};

const Table: NextPage<TableProps> = ({ mainHeading, tableHeaders, data }) => {

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHead}>
        <div className={styles.tableHeadLeft}>
          <b className={styles.mainHead}>{mainHeading}</b>
          <b className={styles.subHead}>{"View all"}</b>
          <div className={styles.arrowicon}>
            <FaArrowRightLong />
          </div>
          {/* <Image
            className={styles.arrowRight}
            alt="arrowRight"
            src={Arrow}
          /> */}
        </div>
        <div className={styles.tableHeadRight}>
          <div className={styles.hovericons}>
            <IoMoveOutline />
            <LiaTimesSolid />
          </div>

        </div>

      </div>
      <div className={styles.tableDataContainer}>
        <div className={styles.tableDataHead}>
          <div className={styles.tableData1}>{tableHeaders[0]}</div>
          <div className={styles.tableData2}>{tableHeaders[1]}</div>
          <div className={styles.tableData3}>{tableHeaders[2]}</div>
          <div className={styles.tableData4}>{tableHeaders[3]}</div>
        </div>
        <div className={styles.tableContent}>
          {data.map((item, index) => (
            <div className={styles.tableChild} key={index}>
              {item.Image && (
                <Image src={item.Image} alt="Image" width={20} height={20} />
              )}
              <div className={styles.tableList1}>{item.Column1}</div>
              <div className={styles.tableList2}>{item.Column2}</div>
              <div className={styles.tableList3}>{item.Column3}</div>
              <div className={styles.tableList4}>{item.Column4}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Table;