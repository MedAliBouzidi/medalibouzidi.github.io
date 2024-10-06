import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link href="/" className="text-blue-400 hover:underline">
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
