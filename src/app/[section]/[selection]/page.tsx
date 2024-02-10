import { redirect } from "next/navigation";
import { getActiveSelections, isSection, schema } from "@/api-schema/data";
import Selection from "@/components/section/selection/Selection";

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

export function generateStaticParams() {
    return getActiveSelections().flatMap(([sectionName, section]) =>
        section.selections.map((selection) => ({
            section: sectionName,
            selection: selection.name,
        })),
    );
}

export const dynamicParams = false;
