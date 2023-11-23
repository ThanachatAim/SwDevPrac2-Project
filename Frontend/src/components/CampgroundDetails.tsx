import getCampground from "@/libs/getCampground";
import getUserProfile from "@/libs/getUserProfile";

export default async function CampgroundDetails({ campgroundId }: { campgroundId: string }) {
    const campgroundDetail = await getCampground(campgroundId);
    
    return campgroundDetail ? (
        <div className="text-xl">Campground: {campgroundDetail.data.name}</div>
    ) : (
        <div className="text-xl">Loading campground details...</div>
    );
}
