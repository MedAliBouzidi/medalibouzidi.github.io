import {Badge} from "@/components/ui/badge";

export const CustomBadge = ({badge}: { badge: string }) => {
    return (
        <Badge variant="outline"
               className="absolute top-3 right-3 capitalize text-sm text-transparent bg-clip-text bg-blue-400">
            {badge}
        </Badge>
    );
}
