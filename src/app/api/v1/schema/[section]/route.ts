import { NextResponse } from "next/server";
import { isSection } from "@/api-schema/data";
import { mapV1Schema } from "@/documentation-api/v1";
import { SchemaParams, SchemaResponse } from "@/documentation-api/v1.types";

export async function GET(_: Request, props: { params: Promise<SchemaParams> }): Promise<NextResponse<SchemaResponse>> {
    const { section } = await props.params;

    if (isSection(section)) {
        return NextResponse.json(mapV1Schema(section));
    } else {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
}
