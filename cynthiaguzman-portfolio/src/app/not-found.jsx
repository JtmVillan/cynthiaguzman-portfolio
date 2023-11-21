import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="text-center py-80 text-neutral-content">
            <h2 className="text-3xl">A little lost?</h2>
            <p>We can't find the page you're looking for right now</p>
            <p>Go back <Link href="/" className="hover:underline underline-offset-4 ease-in duration-150 decoration-accent font-semibold text-accent">home</Link></p>
        </main>
    )
}