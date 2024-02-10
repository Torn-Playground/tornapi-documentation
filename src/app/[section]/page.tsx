import { getActiveSelections } from "@/api-schema/data";

export default function SectionPage() {
    return undefined;
}

export function generateStaticParams() {
    return getActiveSelections().map(([section]) => ({ section }));
}

export const dynamicParams = false;
