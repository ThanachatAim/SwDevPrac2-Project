import getCampground from "@/libs/getCampground";
import ProductCard from "./ProductCard";
import Link from "next/link";
import CampgroundDetails, { UserDetails } from "./CampgroundDetails";
import deleteBooking from "@/libs/deleteBooking";
import { CancelBooking } from "./RemoveCampgroundButton";

export default async function BookingCatalog({
    bookingJson,
}: {
    bookingJson: Object;
}) {
    const bookingJsonReady = await bookingJson;

    return (
        <div>
            <div className="text-center">
            Explore {bookingJsonReady.count} bookings in our catalog
            </div>
            <div className="m-10 flex flex-row flex-wrap justify-around items-around">
                {bookingJsonReady.data.map((bookingItem: Object) => (
                    <div
                        className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                        key={bookingItem._id}
                    >
                        <div className="text-xl">
                            BookingId: {bookingItem._id}
                        </div>
                        <div className="text-xl">
                            User: {bookingItem.user._id}
                        </div>
                        {/* Retrieve campground details for each bookingItem */}
                        <CampgroundDetails campgroundId={bookingItem.campground._id} />
                        <div className="text-xl">Booking Date: {bookingItem.bookingDate}</div>
                        <div className="text-xl">CheckOut Date: {bookingItem.checkoutDate}</div>
                        <Link href={`/booking/${bookingItem._id}`}>
                        <button
                            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                        text-white shadow-sm mb-2"
                        >
                            Edit Booking
                        </button>
                        </Link>
                        <CancelBooking bookingId={bookingItem._id} />
                    </div>
                ))}
            </div>
        </div>
    );
}

