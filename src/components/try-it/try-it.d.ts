export type CallResponse = {
    url: string;
    data: any;
    timestamp: number;
};

type ErrorResponse = {
    error: {
        code: number;
        error: string;
    };
};

export type InfoResponse =
    | ErrorResponse
    | {
          access_level: number;
          access_type: string;
      };
