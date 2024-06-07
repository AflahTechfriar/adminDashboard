import Settings from "../components/settings";
import AppLayout from "@/modules/app/layouts/appLayout";

export default function AdminDashboardView(){
    return(
        <AppLayout pageTitle="Settings">
            <Settings/>
        </AppLayout>
    )
}