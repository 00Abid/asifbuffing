import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base">
            <h2 className="text-4xl font-bold text-logo mb-4">Not Found</h2>
            <p className="text-lg text-dark mb-8">Could not find requested resource</p>
            <Link href="/" className="px-6 py-3 bg-logo text-light rounded-lg hover:bg-neutral transition-colors">
                Return Home
            </Link>
        </div>
    )
}
