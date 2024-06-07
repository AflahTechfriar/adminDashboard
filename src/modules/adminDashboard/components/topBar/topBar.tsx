import React from 'react';
import { NextPage } from 'next';
import styles from './topBar.module.css';

interface TopBarProps {
    activeJobsCount: number;
    newCandidatesCount: number;
    newCompaniesCount: number;
    newJobPostingsCount: number;
}

const TopBar: NextPage<TopBarProps> = ({ activeJobsCount, newCandidatesCount, newCompaniesCount, newJobPostingsCount }) => {
    return (
        <div className={styles.topWrapper}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>

            <div className={styles.wrapper}>
                <div className={styles.item}>{activeJobsCount}</div>
                <div className={styles.itemDesc}>Active jobs</div>
            </div>
            <div className={styles.lineDiv} />
            <div className={styles.wrapper}>
                <div className={styles.item}>{newCandidatesCount}</div>
                <div className={styles.itemDesc}>New candidates</div>
            </div>
            <div className={styles.lineDiv} />
            <div className={styles.wrapper}>
                <div className={styles.item}>{newCompaniesCount}</div>
                <div className={styles.itemDesc}>New companies</div>
            </div>
            <div className={styles.lineDiv} />
            <div className={styles.wrapper}>
                <div className={styles.item}>{newJobPostingsCount}</div>
                <div className={styles.itemDesc}>New job postings</div>
            </div>
        </div >
    );
};

export default TopBar;
