import { ErrorPayload, ErrorResponse } from '../types/request.type';
import axios, { AxiosError } from "axios"
import { User } from "types/user.types";

export type LoginParams = {
    email: string;
    password: string;
  }
  
export type RegisterParams = {
      username: string;
      emoji: string;
  } & LoginParams;

// export type UserResponse = {
//     _id: string;
//     email: string;
//     emoji: string;
//     username: string;
// }

const authAxios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
    withCredentials: true,
})

// export type ErrorResponse = {
//     data: string; 
// }

// export type ErrorPayload = {
//     message: string;
//     status: number;
// }

export const register = async (params: RegisterParams): Promise<User | ErrorPayload> => {
    try {
        const response = await authAxios.post<User>('user', params)
        return response.data;
    } catch (error) {
        const { status, data } = (error as AxiosError).response as ErrorResponse;

        return {
            status,
            message: data
        } as ErrorPayload
    }
};