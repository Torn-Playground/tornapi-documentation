import { NextResponse } from "next/server";
import errorCodes from "@/api-schema/errors";
import type { ErrorsResponse } from "@/documentation-api/v1.types";

export async function GET(): Promise<NextResponse<ErrorsResponse>> {
    return NextResponse.json({ errors: errorCodes.map(({ code, message, description }) => ({ code, message, description })) });
}
