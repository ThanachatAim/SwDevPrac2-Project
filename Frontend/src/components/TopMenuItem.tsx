import Link from "next/link"
import styles from "./topmenu.module.css"

export default function TopMenuItem ({ title, pageRef}:{title:string, pageRef:string}) {
    return (
        <Link href={pageRef} className="w-120 text-center my-auto mx-3 font-sans text-lg text-gray-500">
            {title}
        </Link>
    )
}