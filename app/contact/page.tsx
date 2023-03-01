'use client';
import Link from "next/link"
import {useRouter} from 'next/navigation'

export default function Contact() {
    const router = useRouter()

    return(
        <div>
            <h1>Contact page</h1>
            <Link href="/">back home</Link>
            <button onClick={() => router.push('/')}>take me home pls</button>
        </div>
    )
}