import Image from "next/image";
import getCampground from "@/libs/getCampground";
import Link from "next/link";

export default async function HospitalDetailPage({
    params,
}: {
    params: { hid: string };
}) {
    const hospitalDetail = await getCampground(params.hid);

    // const mockHospitalRepo = new Map()
    // mockHospitalRepo.set("001",{name: 'Chulalongkorn Hospital', image: "/img/chula.jpg"})
    // mockHospitalRepo.set("002",{name: 'Rajavithi Hospital', image: "/img/rajavithi.jpg"})
    // mockHospitalRepo.set("003",{name: 'Thammasat University Hospital', image: "/img/thammasat.jpg"})

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{hospitalDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image
                    src={hospitalDetail.data.picture}
                    alt="Hospital Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
                <div className="text-md mx-5 text-left">
                    <div className="text-md mx-5">
                        Address: {hospitalDetail.data.address}
                    </div>
                    <div className="text-md mx-5">
                        District: {hospitalDetail.data.district}
                    </div>
                    <div className="text-md mx-5">
                        Province: {hospitalDetail.data.province}
                    </div>
                    <div className="text-md mx-5">
                        Postal Code: {hospitalDetail.data.postalcode}
                    </div>
                    <div className="text-md mx-5">
                        Tel: {hospitalDetail.data.tel}
                    </div>

                    <Link
                        href={`/booking?id=${params.hid}&name=${hospitalDetail.data.name}`}
                    >
                        <button
                            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm"
                        >
                            Booking
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
}
