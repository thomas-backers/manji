export interface ApiData {
  message: string;
}

export interface ApiError {
  origin: string;
  message: string;
}

export interface ApiSuccess<Data extends ApiData> {
  success: true;
  data: Data;
}

export interface ApiFailure {
  success: false;
  errors: ApiError[];
}

export type ApiResponse<Data extends ApiData> = {
  success: boolean;
  data?: Data;
  errors?: ApiError[];
} & (ApiSuccess<Data> | ApiFailure);
