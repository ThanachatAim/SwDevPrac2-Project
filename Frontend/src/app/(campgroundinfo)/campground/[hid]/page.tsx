import Image from "next/image";
import getCampground from "@/libs/getCampground";
import Link from "next/link";
import UpdateCampgroundForm from "@/components/UpdateCampgroundForm";
import { getCampgrounds } from "@/libs/getCampgrounds";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import deleteCampground from "@/libs/deleteCampground";

export default async function CampgroundDetailPage({
    params,
}: {
    params: { hid: string };
}) {
    const campgroundDetail = await getCampground(params.hid);

    const campgrounds = getCampgrounds();
    let profile = null;

    const session = await getServerSession(authOptions);
    if (session) {
        profile = await getUserProfile(session.user.token);
    }

    const onDelete = async () => {
        try {
            const res = await deleteCampground(params.hid);
        } catch (error) {
            console.error(error);
        }
    };

    // const mockHospitalRepo = new Map()
    // mockHospitalRepo.set("001",{name: 'Chulalongkorn Hospital', image: "/img/chula.jpg"})
    // mockHospitalRepo.set("002",{name: 'Rajavithi Hospital', image: "/img/rajavithi.jpg"})
    // mockHospitalRepo.set("003",{name: 'Thammasat University Hospital', image: "/img/thammasat.jpg"})

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{campgroundDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image
                    src={campgroundDetail.data.picture}
                    alt="Campground Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
                <div className="text-md mx-5 text-left">
                    <div className="text-md mx-5">
                        Address: {campgroundDetail.data.address}
                    </div>
                    <div className="text-md mx-5">
                        District: {campgroundDetail.data.district}
                    </div>
                    <div className="text-md mx-5">
                        Province: {campgroundDetail.data.province}
                    </div>
                    <div className="text-md mx-5">
                        Postal Code: {campgroundDetail.data.postalcode}
                    </div>
                    <div className="text-md mx-5">
                        Tel: {campgroundDetail.data.tel}
                    </div>

                    <Link
                        href={`/booking?id=${params.hid}&name=${campgroundDetail.data.name}`}
                    >
                        <button
                            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm mt-5"
                        >
                            Booking
                        </button>
                    </Link>
                    <button
                        className="block rounded-md bg-red-400 hover:bg-red-600 px-3 py-2
                        text-white shadow-sm mt-5"
                        >
                        Remove
                    </button>
                </div>
            </div>
            {profile?.data.role == "admin" ? <UpdateCampgroundForm params={params}/> : null}
        </main>
    );
}

export async function generateStaticParams() {
    return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
}
