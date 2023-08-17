import { NextResponse } from "next/server";
import { schema } from "@/api-schema/data";
import { SectionsResponse } from "@/documentation-api/v1.types";

export async function GET(): Promise<NextResponse<SectionsResponse>> {
    return NextResponse.json({ sections: Object.keys(schema) });
}
