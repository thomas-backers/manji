export interface ApiMessage {
  message: string;
}

export interface ApiError {
  origin: string;
  message: string;
}

export interface ApiSuccess<Data extends ApiMessage> {
  success: true;
  data: Data;
}

export interface ApiFailure {
  success: false;
  errors: ApiError[];
}

export type ApiResponse<Data extends ApiMessage> = {
  success: boolean;
  data?: Data;
  errors?: ApiError[];
} & (ApiSuccess<Data> | ApiFailure);
