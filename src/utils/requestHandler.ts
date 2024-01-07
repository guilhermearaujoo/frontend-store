import { AxiosResponse, AxiosError } from "axios";

type BaseRequest<T, V> = (params?: T) => Promise<AxiosResponse<V>>;

type SuccessResponse<V> = {
  code: "success";
  data: V;
};

type ErrorResponse<AxiosError> = {
  code: "error";
  message: AxiosError;
};

type BaseResponse<V, AxiosError> =
  | SuccessResponse<V>
  | ErrorResponse<AxiosError>;

export const requestHandler =
  <T, V, E = AxiosError>(request: BaseRequest<T, V>) =>
  async (params?: T): Promise<BaseResponse<V, E>> => {
    try {
      const response = await request(params);
      return { code: "success", data: response.data };
    } catch (error) {
      return { code: "error", message: error as E };
    }
  };
