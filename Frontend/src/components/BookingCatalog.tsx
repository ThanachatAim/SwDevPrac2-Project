import ProductCard from "./ProductCard";
import Link from "next/link";

export default async function BookingCatalog({
    bookingJson,
}: {
    bookingJson: Object;
}) {
    const bookingJsonReady = await bookingJson;
    return (
        <div className="text-center">
            Explore {bookingJsonReady.count} bookings in our catalog
        </div>
    );
}
