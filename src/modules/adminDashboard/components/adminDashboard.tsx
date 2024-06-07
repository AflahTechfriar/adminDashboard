import React, { useCallback, useState } from 'react';
import List from "@/themes/components/appList/appList";
import TopBar from "@/modules/adminDashboard/components/topBar/topBar";
import BarChart from "@/themes/components/appBarChart/appBarChart";
import DoughnutChart from "@/themes/components/appDoughnutChart/appDoughnutChart";
import Button from "@/themes/components/appButton/appButton";
import { MdQrCodeScanner } from "react-icons/md";
import Ampere from "@/themes/images/Ampere.png";
import True from "@/themes/images/True.png";
import Cardinal from "@/themes/images/Cardinal.png";
import Seoul from "@/themes/images/Seoul.png";
import Samsung from "@/themes/images/Samsung.png";
import WidgetDrawer from '@/themes/components/customDrawer/customDrawer';
import WidgetCard from '@/modules/adminDashboard/components/Widgetcard/testing'
import BarchartCard from '@/modules/adminDashboard/components/BarcharCard/testing'
import DoughnutchartCard from '@/modules/adminDashboard/components/DoughnutchartCard/testing';
import styles from "@/modules/adminDashboard/components/adminDashboard.module.css";
import SwitchInput from '@/themes/components/appSwitch/appSwitch';

const billingData = [
  { Column1: "#1243435", Column2: "Kierra Gouse", Column3: "$45.76", Column4: "22/12/23" },
  { Column1: "#1243434", Column2: "Jenna James", Column3: "$45.90", Column4: "22/12/23" },
  { Column1: "#1243433", Column2: "Kierra Knights", Column3: "$65.00", Column4: "22/12/23" },
  { Column1: "#1243432", Column2: "Leslie Knope", Column3: "$45.90", Column4: "22/12/23" },
  { Column1: "#1243431", Column2: "Ben Watts", Column3: "$65.00", Column4: "22/12/23" }
];

const newJobData = [
  { Image: Ampere, Column1: "Ampere Solutions", Column2: "Electrical Inspector", Column3: "22/12/23", Column4: "34/35" },
  { Image: True, Column1: "True Builders", Column2: "Director,Electrical", Column3: "22/12/23", Column4: "34/35" },
  { Image: Cardinal, Column1: "Cardinal Health", Column2: "Asst. Electrical Eng..", Column3: "22/12/23", Column4: "34/35" },
  { Image: Seoul, Column1: "Seoul Organisations", Column2: "Sales Executive", Column3: "22/12/23", Column4: "34/35" },
  { Image: Samsung, Column1: "Samsung", Column2: "Mechanical Eng..", Column3: "22/12/23", Column4: "34/35" }
];

const ApplicantData = {
  head: 'Applicants by country',
  subhead: 'These are the countries where applications have been sent from.',
  labels: ['India', 'Kuwait', 'UAE', 'Bahrain'],
  datasetLabel: 'Applicants',
  data: [18, 12, 6, 9]
};

const JobData = {
  head: 'Job listing by category',
  subhead: 'These are the statuses of the applications you’ve received.',
  labels: ['India', 'Kuwait'],
  backgroundColor: ['#AD698F', '#377EC3C7'],
  borderColor: ['#984372', '#377EC3'],
  datasetLabel: 'Jobs',
  data: [82.6, 41.4],
  innerText: ['124K', 'Jobs'],
position:'bottom'
};

const HiringData = {
  head: 'Hiring',
  subhead: 'These are the statuses of platform applications.',
  labels: ['Applications', 'Under review', 'Shortlisted', 'Turned down', 'Hired'],
  backgroundColor: ['#984372C7', '#377EC3C7', '#2B8657C7', '#F3B957C7', '#BB2F38B9'],
  borderColor: ['#984372', '#377EC3', '#2B8657', '#F3B957', '#BB2F38'],
  datasetLabel: 'Applicants',
  data: [325, 150, 130, 110, 100],
  innerText: ['975', 'Applicants'],
  position:'bottom'

};

const NewusersData = {
  head: 'New users',
  subhead: 'These are the statuses of the applications you’ve received.',
  labels: ['Companies', 'Candidates'],
  backgroundColor: ['#F47068C7', '#F3B957C7'],
  borderColor: ['#F47068', '#F3B957'],
  datasetLabel: 'Users',
  data: [82.6, 41.4],
  innerText: ['124K', 'Users'],
  position:'bottom'

};

const ActiveusersData = {
  head: 'Active users',
  subhead: 'These are the statuses of the applications you’ve received.',
  labels: ['Candidates', 'Companies'],
  backgroundColor: ['#5AA17CC7', '#CE686FC7'],
  borderColor: ['#5AA17C', '#CE686F'],
  datasetLabel: 'Active users',
  data: [40.5, 13.5],
  innerText: ['54K', 'Active users'],
  position:'bottom'

};

export default function AdminDashboardView() {
  const [isWidgetOpen, setWidgetOpen] = useState(false);

  const openWidget = useCallback(() => {
    setWidgetOpen(true);
  }, []);

  const closeWidget = useCallback(() => {
    setWidgetOpen(false);
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainHead}>
          <h1 className={styles.title}>Hi,<span>Good morning, Kurt!</span>👋</h1>
          <Button
            type="dark-magenta"
            text="Configure"
            icon={<MdQrCodeScanner />}
            iconPosition="right"
            handleClick={openWidget}
          />
        </div>
        <TopBar
          activeJobsCount={4521}
          newCandidatesCount={120}
          newCompaniesCount={205}
          newJobPostingsCount={322}
        />
        <div className={styles.field}>
          <List
            mainHeading="Billing"
            tableHeaders={["Invoice no.", "Account holder", "Amount", "Date modified"]}
            data={billingData}
          />
          <BarChart chartData={ApplicantData} />
        </div>
        <div className={styles.field}>
          <DoughnutChart chartData={JobData} />
          <List
            mainHeading="New job listings"
            tableHeaders={['Company', 'Role', 'Applied on', 'Openings']}
            data={newJobData}
          />
        </div>
        <div className={styles.field}>
          <DoughnutChart chartData={HiringData} />
          <DoughnutChart chartData={NewusersData} />
          <DoughnutChart chartData={ActiveusersData} />
        </div>
      </div>
      <WidgetDrawer isOpen={isWidgetOpen} onClose={closeWidget}>
        <div className={styles.boxWrapper}>
          <p>Overall Summary</p>
          <div className={styles.wrapper}>
            <SwitchInput label='Overall Summary' size='small' />
            <SwitchInput label='Active jobs' size='small' />
            <SwitchInput label='New candidates' size='small' />
            <SwitchInput label='New companies' size='small' />
            <SwitchInput label='New job posting' size='small' />
          </div>
        </div>

        <WidgetCard
          mainHeading="Overall Summary"
          subHeading='Billing'
          data={billingData}
        />
        <BarchartCard chartData={ApplicantData} />
      <DoughnutchartCard chartData={JobData}/>
        <WidgetCard
          subHeading='New Jobs'
          data={newJobData}
        />
      <DoughnutchartCard chartData={HiringData}/>
      <DoughnutchartCard chartData={NewusersData}/>
      <DoughnutchartCard chartData={ActiveusersData}/>
      </WidgetDrawer>
    </>
  );
}
