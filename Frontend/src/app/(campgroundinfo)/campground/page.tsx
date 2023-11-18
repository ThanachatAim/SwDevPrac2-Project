import CampgroundCatalog from "@/components/CampgroundCatalog";
// import { getHospitals } from "@/libs/getCampgrounds";
import { getCampgrounds } from "@/libs/getCampgrounds";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CardPanel from "@/components/CardPanel";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";

export default async function Hospital() {
    const campgrounds = getCampgrounds();
    let profile = null;

    const session = await getServerSession(authOptions);
    if (session) {
        profile = await getUserProfile(session.user.token);
    }

    return (
        <main className="text-center p-5">
            <h1 className="text-x1 font-medium">Select Campground</h1>
            <Suspense
                fallback={
                    <p>
                        Loading ... <LinearProgress />
                    </p>
                }
            >
                <CampgroundCatalog campgroundJson={campgrounds} />
            </Suspense>

            {profile?.data.role == "admin" ? <AddHospitalForm /> : null}
        </main>
    );
}
