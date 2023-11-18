export default async function getCampground(id: string) {
    const response = await fetch(
        `http://localhost:5000/api/v1/campgrounds/${id}`,
        { next: { tags: ["campgrounds"] } }
    );
    if (!response.ok) {
        throw new Error("Failed to fetch campground");
    }
    return await response.json();
}
