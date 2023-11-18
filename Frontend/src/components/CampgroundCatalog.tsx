import ProductCard from "./ProductCard";
import Link from "next/link";

export default async function CampgroundCatalog({
    campgroundJson,
}: {
    campgroundJson: Object;
}) {
    const campgroundJsonReady = await campgroundJson;
    return (
        <>
            Explore {campgroundJsonReady.count} campgrounds in our catalog
            <div className="m-10 flex flex-row flex-wrap justify-around items-around">
                {campgroundJsonReady.data.map((campgroundItem: Object) => (
                    <Link
                        href={`/campground/${campgroundItem.id}`}
                        className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%]
                    p-2 sm:p-4 md:p-4 lg:p-8"
                    >
                        <ProductCard
                            campgroundName={campgroundItem.name}
                            imgSrc={campgroundItem.picture}
                        />
                    </Link>
                ))}
            </div>
        </>
    );
}
