import { ApiResponse } from "@/api/type";

export type VocParams = {
  version: string;
  email: string;
  text: string;
  files: File[];
};

/**
 * 고객소리함 api
 * @param version app version
 * @param email email 주소
 * @param text voc 글
 * @param files 첨부 파일
 *
 */
export const postVoc = async (param: VocParams): Promise<ApiResponse> => {
  const formData = new FormData();
  formData.append("email", param.email);
  formData.append("text", param.text);

  param.files.forEach(file => {
    formData.append(`files`, file);
  });

  const response: any = await fetch("/api/v1/main/menu/feedback", {
    method: "POST",
    body: formData,
    headers: {
      "App-Version": param.version,
      finhub: `${process.env.NEXT_PUBLIC_API_KEY}`
    }
  });

  return response.json() as ApiResponse;
};
