import AdminDashboard from "../components/adminDashboard";
import AppLayout from "@/modules/app/layouts/appLayout";

export default function AdminDashboardView(){
    return(
        <AppLayout pageTitle="Dashboard">
            <AdminDashboard/>
        </AppLayout>
    )
}