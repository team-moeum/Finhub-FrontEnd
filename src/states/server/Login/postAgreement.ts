import { mutationKeys } from "../mutations";

import { post } from "@/api/client";
import { ApiResponse } from "@/api/type";

export type AgreementParams = {
  privacy_policy: boolean;
  terms_of_service: boolean;
};

/**
 * 회원가입 정보 동의
 * @param privacy_policy boolean
 * @param terms_of_service boolean
 *
 */
export const postAgreement = async (param: AgreementParams): Promise<ApiResponse> => {
  const response: ApiResponse = await post("/api/v1/auth/agreement", mutationKeys.agreement, {
    ...param
  });

  return response;
};
