"use client";
import { useReducer, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { getCampgrounds } from "@/libs/getCampgrounds";

export default function CardPanel() {
    const [campgroundResponse, setCampgroundResponse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const campgrounds = await getCampgrounds();
            setCampgroundResponse(campgrounds);
        };
        fetchData();
    }, []);

    const ratingReducer = (
        ratingMap: Map<string, number | null>,
        action: { type: string; campgroundName: string; rating: number | null }
    ) => {
        switch (action.type) {
            case "add": {
                return new Map(ratingMap.set(action.campgroundName, action.rating));
            }
            case "remove": {
                ratingMap.delete(action.campgroundName);
                return new Map(ratingMap);
            }
            default:
                return ratingMap;
        }
    };

    const [ratingMap, dispatchRating] = useReducer(
        ratingReducer,
        new Map<string, number>()
    );

    // const mockHospitalRepo = [
    //     {hid: '001', name: 'Chulalongkorn Hospital', image: "/img/chula.jpg"},
    //     {hid: '002', name: 'Rajavithi Hospital', image: "/img/rajavithi.jpg"},
    //     {hid: '003', name: 'Thammasat University Hospital', image: "/img/thammasat.jpg"},
    // ]

    if (!campgroundResponse) return <p>Campground Panel is Loading ...</p>;

    return (
        <div>
            <div className="m-10 flex flex-row flex-wrap justify-around items-around">
                {campgroundResponse.data.map((campgroundItem: Object) => (
                    <Link href={`/campground/${campgroundItem.id}`} className="w-1/5">
                        <ProductCard
                            campgroundName={campgroundItem.name}
                            imgSrc={campgroundItem.picture}
                            onRatingUpdate={(campground: string, rating: number) =>
                                dispatchRating({
                                    type: "add",
                                    campgroundName: campground,
                                    rating: rating,
                                })
                            }
                            rating={ratingMap.get(campgroundItem.name) ?? 0}
                        />
                    </Link>
                ))}
            </div>
            <div className="w-full text-xl font-medium mx-2">
                Rating List:{ratingMap.size}
            </div>
            {Array.from(ratingMap.entries()).map(([campground, rating]) => (
                <div
                    key={campground}
                    onClick={() =>
                        dispatchRating({
                            type: "remove",
                            campgroundName: campground,
                            rating: rating,
                        })
                    }
                    className="mx-2"
                >
                    {campground}: Rating = {rating}
                </div>
            ))}
        </div>
    );
}
