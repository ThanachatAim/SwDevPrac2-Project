import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UpdateBookingForm from "@/components/UpdateBookingForm";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";

export default async function BookingDetailPage({
    params,
}: {
    params: { bid: string };
}) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;

    const profile = await getUserProfile(session.user.token);
    var createdAt = new Date(profile.data.createdAt);
    console.log(params.bid)
    return (
        <UpdateBookingForm bookingId={params.bid}></UpdateBookingForm>
    )
}

export async function generateStaticParams() {
    return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
}
