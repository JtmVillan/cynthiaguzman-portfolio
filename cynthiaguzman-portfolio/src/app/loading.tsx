import Link from "next/link";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <main className="text-center py-80">
            <h2 className="text-3xl"><span className="loading loading-spinner loading-lg"></span></h2>
        </main>
    )
  }