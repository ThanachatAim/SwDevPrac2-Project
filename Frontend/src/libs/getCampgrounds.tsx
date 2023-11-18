import { resolve } from "path";

export async function getCampgrounds() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await fetch("http://localhost:5000/api/v1/campgrounds", {
        next: { tags: ["campgrounds"] },
    });
    if (!response.ok) {
        throw new Error("Failed to fetch campgroundss");
    }
    return await response.json();
}
