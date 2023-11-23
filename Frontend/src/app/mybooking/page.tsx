
import BookingCart from "@/components/BookingCart"
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getBookings } from "@/libs/getBookings";
import BookingCatalog from "@/components/BookingCatalog";
export default async function MyBookingPage(){

    
    let profile = null;

    const session = await getServerSession(authOptions);
    if (session) {
        profile = await getUserProfile(session.user.token);
    }
    const bookings = getBookings(session?.user.token ?? "");
    
    return (
        <main className="mt-5">
            <BookingCatalog bookingJson={bookings}/>
        </main>
    )
}