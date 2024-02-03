export interface CallResponse {
    url: string;
    data: unknown;
    timestamp: number;
}

interface ErrorResponse {
    error: {
        code: number;
        error: string;
    };
}

export type InfoResponse =
    | ErrorResponse
    | {
          access_level: number;
          access_type: string;
      };
