import { useRouter } from "next/navigation";

export default function BackToListComponent() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push('/')}
            className="mb-6 text-gray-500 hover:text-gray-700 transition flex items-center gap-2"
            aria-label="Go back to book list"
        >
            ← Back to List
        </button>
    )
}