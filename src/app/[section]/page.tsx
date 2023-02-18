import { getActiveSelections } from "@/api-schema/data";

// noinspection JSUnusedGlobalSymbols
export default function SectionPage() {
    return undefined;
}

// noinspection JSUnusedGlobalSymbols
export async function generateStaticParams() {
    return getActiveSelections().map(([section]) => ({ section }));
}

// noinspection JSUnusedGlobalSymbols
export const dynamicParams = false;
