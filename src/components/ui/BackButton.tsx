"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
    label?: string;
}

const BackButton = ({ label = "Back" }: BackButtonProps) => {
    const router = useRouter();

    return (
        <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-transparent hover:bg-gray-100 rounded-md mb-4"
            onClick={() => router.back()}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
            </svg>
            {label}
        </button>
    );
};

export default BackButton;
