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
            <div className="m-10 flex flex-row flex-wrap justify-around items-around">
                {bookingJsonReady.data.map((bookingItem: Object) => (
                    <div
                        className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                        key={bookingItem.id}
                    >
                        <div className="text-xl">Name: </div>
                        <div className="text-xl">
                            Surname: 
                        </div>
                        <div className="text-xl">
                            CitizenId: {bookingItem.id}
                        </div>
                        <div className="text-xl">
                            Campground: 
                        </div>
                        <div className="text-xl">Date: </div>
                        <button
                            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                        text-white shadow-sm"
                        >
                            Cancel Booking
                        </button>
                    </div>
                    // <Link
                    //     href={`/booking/${bookingItem.id}`}
                    //     className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%]
                    // p-2 sm:p-4 md:p-4 lg:p-8"
                    // >
                    
                    //     <ProductCard
                    //         bookingName={bookingItem.name}
                    //         imgSrc={bookingItem.picture}
                    //     />
                    // </Link>
                ))}
            </div>
        </div>
    );
}
