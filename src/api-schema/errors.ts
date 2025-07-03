import { ErrorCode } from "@/api-schema/schema.types";

const errorCodes: ErrorCode[] = [
    {
        code: 0,
        message: "Unknown error",
        description: "Unhandled error, should not occur.",
    },
    { code: 1, message: "Key is empty", description: "Private key is empty in current request." },
    {
        code: 2,
        message: "Incorrect Key",
        description: "Private key is wrong/incorrect format.",
    },
    { code: 3, message: "Wrong type", description: "Requesting an incorrect basic type." },
    {
        code: 4,
        message: "Wrong fields",
        description: "Requesting incorrect selection fields.",
    },
    {
        code: 5,
        message: "Too many requests",
        description: "Requests are blocked for a small period of time because of too many requests per user (max 100 per minute).",
    },
    { code: 6, message: "Incorrect ID", description: "Wrong ID value." },
    {
        code: 7,
        message: "Incorrect ID-entity relation",
        description: "A requested selection is private (For example, personal data of another user / faction).",
    },
    {
        code: 8,
        message: "IP block",
        description: "Current IP is banned for a small period of time because of abuse.",
    },
    { code: 9, message: "API disabled", description: "Api system is currently disabled." },
    {
        code: 10,
        message: "Key owner is in federal jail",
        description: "Current key can't be used because owner is in federal jail.",
    },
    {
        code: 11,
        message: "Key change error",
        description: "You can only change your API key once every 60 seconds.",
    },
    { code: 12, message: "Key read error", description: "Error reading key from Database." },
    {
        code: 13,
        message: "The key is temporarily disabled due to owner inactivity",
        description: "The key owner hasn't been online for more than 7 days.",
    },
    {
        code: 14,
        message: "Daily read limit reached",
        description: "Too many records have been pulled today by this user from our cloud services.",
    },
    {
        code: 15,
        message: "Temporary error",
        description: "An error code specifically for testing purposes that has no dedicated meaning.",
    },
    {
        code: 16,
        message: "Access level of this key is not high enough",
        description: "A selection is being called of which this key does not have permission to access.",
    },
    { code: 17, message: "Backend error occurred, please try again." },
    { code: 18, message: "API key has been paused by the owner." },
    { code: 19, message: "Must be migrated to crimes 2.0." },
    { code: 20, message: "Race not yet finished." },
    { code: 21, message: "Incorrect category", description: "Wrong cat value." },
    { code: 22, message: "This selection is only available in API v1." },
    { code: 23, message: "This selection is only available in API v2." },
    { code: 24, message: "Closed temporarily." },
];

export default errorCodes;
