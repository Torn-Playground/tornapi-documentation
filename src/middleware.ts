import { NextResponse } from "next/server";

type CorsOptions = {
    allowedMethods: string[];
    allowedOrigins: string[];
    allowedHeaders: string[];
    exposedHeaders: string[];
    maxAge: number;
    credentials: boolean;
};

const CORS_OPTIONS: CorsOptions = {
    allowedMethods: ["GET", "HEAD", "POST"],
    allowedOrigins: ["*"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["*"],
    maxAge: 86400,
    credentials: true,
};

export function middleware() {
    const response = NextResponse.next();

    response.headers.set("Access-Control-Allow-Origin", CORS_OPTIONS.allowedOrigins.join(","));
    response.headers.set("Access-Control-Allow-Credentials", CORS_OPTIONS.credentials.toString());
    response.headers.set("Access-Control-Allow-Methods", CORS_OPTIONS.allowedMethods.join(","));
    response.headers.set("Access-Control-Allow-Headers", CORS_OPTIONS.allowedHeaders.join(","));
    response.headers.set("Access-Control-Expose-Headers", CORS_OPTIONS.exposedHeaders.join(","));
    response.headers.set("Access-Control-Max-Age", CORS_OPTIONS.maxAge?.toString() ?? "");

    return response;
}

export const config = {
    matcher: "/api/(.*)",
};
