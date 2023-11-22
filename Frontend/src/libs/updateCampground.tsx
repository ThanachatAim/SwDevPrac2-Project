export default async function updateCampground(id: string, token: string, Name:string, Address:string, District:string, 
    Province:string, Postalcode:string, Tel:string, Picture:string) {
    const response = await fetch(
        `http://localhost:5000/api/v1/campgrounds/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token
            },
            body: JSON.stringify({
                name: Name,
                address: Address,
                district: District,
                province: Province,
                postalcode: Postalcode,
                tel: Tel,
                picture: Picture,
            })
        }
    );
    
    if (!response.ok) {
        throw new Error("Failed to update campground");
    }
    
    // If successful deletion, return a success message or indicate success
    return { success: true, message: "Campground updated successfully" };
}