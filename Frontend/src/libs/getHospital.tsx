export default async function getHospital(id:string) {
    const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`, 
    {next: {tags: ['hospitals']}})
    if(!response.ok) {
        throw new Error("Failed to fetch hospital")
    }
    return await response.json()
    
}