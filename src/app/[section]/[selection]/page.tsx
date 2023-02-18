import { getActiveSelections, isSection, schema } from "@/api-schema/data";
import { redirect } from "next/navigation";
import Selection from "@/components/section/selection/Selection";

// noinspection JSUnusedGlobalSymbols
export default function UserSelectionPage({ params: { section, selection } }: { params: { section: string; selection: string } }) {
    if (!isSection(section)) {
        redirect("/");
    }

    const sl = schema[section].selections.find((s) => s.name === selection);

    if (!sl) {
        redirect(`/${section}`);
    }

    return <Selection selection={sl} />;
}

// noinspection JSUnusedGlobalSymbols
export async function generateStaticParams() {
    return getActiveSelections().flatMap(([sectionName, section]) =>
        section.selections.map((selection) => ({
            section: sectionName,
            selection: selection.name,
        })),
    );
}

// noinspection JSUnusedGlobalSymbols
export const dynamicParams = false;
