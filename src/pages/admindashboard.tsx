import AdminDashboardView from "@/modules/adminDashboard/view/adminDashboardView";
import Head from "next/head";
import { NextPage } from "next/types";

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Vadnu | Admin Dashboard</title>
    </Head>
    <AdminDashboardView/>
  </>
);
export default IndexPage;
