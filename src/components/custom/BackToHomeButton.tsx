"use client";

import {ArrowLeft} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export const BackToHomeButton = () => {
    const router = useRouter()

    return (
        <Button
            onClick={() => router.back()}
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-gray-600 hover:bg-opacity-40">
            <ArrowLeft className="mr-2 h-4 w-4"/>
            Back to Projects
        </Button>
    );
}
