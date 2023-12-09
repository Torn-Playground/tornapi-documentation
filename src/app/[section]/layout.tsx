import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import { isSection, schema } from "@/api-schema/data";
import Section from "@/components/section/Section";

export default function SectionLayout({ children, params }: PropsWithChildren<{ params: { section: string } }>) {
    if (!isSection(params.section)) {
        redirect("/");
    }

    const section = schema[params.section];

    return (
        <>
            <Section
                section={params.section}
                selections={section.selections}
                defaultSelection={section.defaultSelection ?? undefined}
                idDescription={section.idDescription ?? undefined}
            />

            {children}
        </>
    );
}
