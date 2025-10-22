import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";
import { isSection, schema } from "@/api-schema/data";
import Section from "@/components/section/Section";

export default async function SectionLayout(props: PropsWithChildren<{ params: Promise<{ section: string }> }>) {
    const params = await props.params;
    const { children } = props;

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
