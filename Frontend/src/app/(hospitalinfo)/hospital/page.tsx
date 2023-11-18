import HospitalCatalog from "@/components/HospitalCatalog"
import { getHospitals } from "@/libs/getHospitals"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm"

export default async function Hospital(){
    const hospitals = getHospitals()
    let profile = null;

    const session = await getServerSession(authOptions);
    if (session) {
        profile = await getUserProfile(session.user.token);
      }

    return (
        <main className="text-center p-5">
            <h1 className="text-x1 font-medium">Select Vaccine Center</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
            <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>

            {
                (profile?.data.role == "admin")?
                <AddHospitalForm />
                : null
            }
        </main>
    )
}