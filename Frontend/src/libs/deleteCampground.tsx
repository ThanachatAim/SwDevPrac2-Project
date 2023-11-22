export default async function deleteCampground(id: string, token: string) {
    const response = await fetch(
        `http://localhost:5000/api/v1/campgrounds/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token
            },
        }
    );
    
    if (!response.ok) {
        throw new Error("Failed to delete campground");
    }
    
    // If successful deletion, return a success message or indicate success
    return { success: true, message: "Campground deleted successfully" };
}
