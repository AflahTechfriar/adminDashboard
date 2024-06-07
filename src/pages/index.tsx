import Head from "next/head";
import { Inter } from "next/font/google";
import AppLayout from "@/modules/app/layouts/appLayout";
import NotificationCard from "@/modules/app/components/notification/notificationCard";
import CandidatesTable, {
  BillingData,
  CandidateData,
  CompaniesData,
  JobsData,
  ReportedAccountData,
  VerificationQueueData,
} from "@/themes/components/appTable/appTable";
import Amper from "@/themes/images/Ampere.png";
import True from "@/themes/images/TrueBuilders.png";
import Cardinal from "@/themes/images/Cardinal.png";
import Seoul from "@/themes/images/Seoul.png";
import Atlassian from "@/themes/images/Atlea.png";
import Person1 from "@/themes/images/image 67.png";
import Person2 from "@/themes/images/image 68.png";
import AppTable from "@/themes/components/appTable/appTable";
const inter = Inter({ subsets: ["latin"] });
const CompaniesData: CompaniesData[] = [
  {
    Companies: "Ampere Solution",
    image_url: Amper,
    Category: "IT Service & Consulting",
    Users: "7 Users",
    Created_on: "10/10/2003",
    Status: true,
  },
  {
    Companies: "True Builders",
    image_url: True,
    Category: "Civil",
    Users: "4 Users",
    Created_on: "10/10/2003",
    Status: true,
  },
  {
    Companies: "Cardinal Health",
    image_url: Cardinal,
    Category: "Health",
    Users: "12 Users",
    Created_on: "10/10/2003",
    Status: true,
  },
  {
    Companies: "Seoul Organisation",
    image_url: Seoul,
    Category: "Food Processing",
    Users: "12 Users",
    Created_on: "10/10/2003",
    Status: false,
  },
];
const JobsData: JobsData[] = [
  {
    image_url: Amper,
    Job_title: "Asst.Electric Engineer",
    Companies: "Ampere Solution",
    Category: "IT Service",
    Level: "Junior",
    Posted_by: "Kierra Gouse",
    Date_modified: "22/12/2023",
    Status: "Active",
  },
  {
    image_url: Cardinal,
    Job_title: "Sales Executive",
    Companies: "Cardinal Health",
    Category: "Health",
    Level: "Junior",
    Posted_by: "Davis Gouse",
    Date_modified: "22/12/2023",
    Status: "Closed",
  },
  {
    image_url: Atlassian,
    Job_title: "Sales Executive",
    Companies: "Atlassian",
    Category: "Architecture",
    Level: "Intermediate",
    Posted_by: "Angel Korsgaard",
    Date_modified: "22/12/2023",
    Status: "Inactive",
  },
  // Add more job entries as needed
];

const CandidateData: CandidateData[] = [
  {
    image_url: Person1,
    Name: "Tony James",
    Date_modified: "22/12/2023",
    Status: true,
  },
  {
    image_url: Person2,
    Name: "Krista Kane",
    Date_modified: "22/12/2023",
    Status: true,
  },
];

const VerificationQueueData: VerificationQueueData[] = [
  {
    image_url: True,
    Name: "True Builders",
    Status: "Verified",
    Date_requested: "22/12/2023",
  },
  {
    image_url: Amper,
    Name: "Ampere Solution",
    Status: "Pending",
    Date_requested: "22/12/2023",
  },
];

const ReportedAccountData: ReportedAccountData[] = [
  {
    image_url: Person1,
    Name: "Lydia James",
    Reported_by: "Ampere Solutions",
    Reason: "No showing for Interview",
    Date_reported: "22/12/2023",
  },
  {
    image_url: Person2,
    Name: "Krista Kane",
    Reported_by: "Ampere Solutions",
    Reason: "No showing for Interview",
    Date_reported: "22/12/2023",
  },
];

const BillingData: BillingData[] = [
  {
    Transaction_id: 12345678901,
    Account_holder: "Kierra Gouse",
    image_url: Amper,
    Company_name: "Ampere Solutions",
    Amount: 45.0,
    Date_modified: "23/12/2023",
  },
  {
    Transaction_id: 13425678901,
    Account_holder: "Alfreid Franci",
    image_url: True,
    Company_name: "TrueBuilders",
    Amount: 45.0,
    Date_modified: "23/12/2023",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Vadnu</title>
      </Head>
      <AppLayout pageTitle="Dashboard">
        <div>
          Dashboard content
          <AppTable
            dataSource={ReportedAccountData}
            onRowClick={function (record) {}}
            onRowActionClick={function (record, sample) {}}
          />

        </div>
      </AppLayout>
    </>
  );
}
