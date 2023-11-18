import ProductCard from "./ProductCard"
import Link from 'next/link'

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Object}) {
    const hospitalJsonReady = await hospitalJson
    return(
        <>
        Explore {hospitalJsonReady.count} hospitals in our catalog
        <div className="m-10 flex flex-row flex-wrap justify-around items-around">
                                
            {hospitalJsonReady.data.map((vacItem:Object)=>(
                    <Link href={`/hospital/${vacItem.id}`} 
                    className='w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%]
                    p-2 sm:p-4 md:p-4 lg:p-8'>
                    <ProductCard vacName={vacItem.name} imgSrc={vacItem.picture}/>
                    </Link>
                ))}
            </div>
        </>
    )
}