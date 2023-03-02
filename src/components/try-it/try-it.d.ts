export type TryResponse = {
    url: string;
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
