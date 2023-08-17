import { NextResponse } from "next/server";
import { isSection } from "@/api-schema/data";
import { mapV1Schema } from "@/documentation-api/v1";
import { SchemaParams, SchemaResponse } from "@/documentation-api/v1.types";

export async function GET(_: Request, { params: { section } }: { params: SchemaParams }): Promise<NextResponse<SchemaResponse>> {
    if (isSection(section)) {
        return NextResponse.json(mapV1Schema(section));
    } else {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
}
