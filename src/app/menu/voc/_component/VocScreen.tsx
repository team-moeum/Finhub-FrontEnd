"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";

import { userState } from "@/states/client/atoms/user";
import { useVoc } from "@/states/server/mutations";

import { isLoggedIn } from "@/utils/auth_client";
import { jsToNative } from "@/utils/jsToNative";

import { useModal } from "@/hooks/useModal";

import AttachmentIcon from "@/public/icons/icon_attachment.svg";
import RadioCheckIcon from "@/public/icons/radio_check_icon.svg";
import RadioIcon from "@/public/icons/radio_icon.svg";

import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/Input";
import { FileInput, TextArea } from "@/components/Input/Input";
import { Popup } from "@/components/Popup";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { DotText } from "@/components/Text/DotText";
import { useToast } from "@/components/Toast/useToast";

const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export const VocScreen = () => {
  const router = useRouter();
  const isLogin = isLoggedIn();

  const [email, setEmail] = useState("");
  const [disabledEmail, setDisabledEmail] = useState(false);
  const [voc, setVoc] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [existEmailCheck, setExistEmailCheck] = useState(false);
  const [currentVersion, setCurrentVersion] = useState("");

  const userInfo = useRecoilValue(userState);

  const diabledSubmit = useMemo(() => !emailRegex.test(email) || !voc, [email, voc]);

  const { showToast } = useToast();
  const emailSettingModal = useModal();

  const vocMutation = useVoc({
    onSuccess: data => {
      showToast({ content: "문의가 접수되었어요!", type: "success" });
      router.back();
    },
    onError: error => {
      showToast({ content: "다시 시도해주세요.", type: "error" });
    }
  });

  useEffect(() => {
    jsToNative({ val1: "appVersion" }, (data: any) => {
      setCurrentVersion(data.detail);
    });
  }, []);

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleVocTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVoc(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleExistEmailCheck = () => {
    if (userInfo.email) {
      if (existEmailCheck) {
        setExistEmailCheck(false);
        setDisabledEmail(false);
      } else {
        setEmail(userInfo.email);
        setExistEmailCheck(true);
        setDisabledEmail(true);
      }
    } else {
      emailSettingModal.open();
    }
  };

  const handleVocSumbit = () => {
    vocMutation.mutate({
      version: currentVersion || "pc",
      email,
      text: voc,
      files
    });
  };

  const handlePrivacyPolicyClick = () => {
    router.push("/menu/termsPolicy");
  };

  const handleEmailSettingConfirm = () => {
    router.push("/menu/user/email");
  };

  return (
    <Container>
      <Stack mt={22} gap={20}>
        <Stack gap={10}>
          <Text size={14} weight={600} color="#7B8287">
            답변 받으실 이메일
            <Text color="#50BF50">*</Text>
          </Text>

          <Input
            type="email"
            value={email}
            placeholder="이메일을 입력하세요."
            onChange={handleEmailInputChange}
            disabled={disabledEmail}
          />

          {isLogin && (
            <FlexBox justifyContent="flex-start" gap={8}>
              <Box width={18} height={18} onClick={handleExistEmailCheck}>
                {existEmailCheck ? <RadioCheckIcon /> : <RadioIcon />}
              </Box>
              <Text size={12} weight={500} color="#7B8287">
                기존 이메일로 받기
              </Text>
            </FlexBox>
          )}
        </Stack>

        <Stack gap={10}>
          <Text size={14} weight={600} color="#7B8287">
            문의사항
            <Text color="#50BF50">*</Text>
          </Text>

          <TextArea
            value={voc}
            placeholder="자세한 내용을 적어주세요."
            onChange={handleVocTextAreaChange}
            style={{
              height: 270
            }}
          />
        </Stack>

        <Stack gap={10}>
          <Text size={14} weight={600} color="#7B8287">
            첨부파일
          </Text>

          <FileInput
            type="file"
            multiple={true}
            placeholder="이메일을 입력하세요."
            onChange={handleFileChange}
            tail={<AttachmentIcon />}
          />
        </Stack>

        <Stack gap={10}>
          <Text size={14} weight={600} color="#7B8287">
            안내사항
          </Text>
          <Stack gap={2}>
            <DotText color="#7B8287" size={12}>
              {`정성껏 답변을 준비하고 있으니, 잠시만 기다려 주세요 :)`}
            </DotText>
            <DotText color="#7B8287" size={12}>
              문의 내용을 자세하게 남겨주시면 빠른 답변에 도움이 됩니다.
            </DotText>
            <DotText color="#7B8287" size={12}>
              산업안전보건법에 따라 고객응대 근로자 보호조치를 하고 있으며 모든 문의는 기록으로
              남습니다.
            </DotText>
            <DotText color="#7B8287" size={12}>
              제출 버튼을 누르시면{" "}
              <Text
                onClick={handlePrivacyPolicyClick}
                style={{ textDecoration: "underline", textUnderlineOffset: 1 }}
              >
                개인정보 처리방침
              </Text>
              에 동의하신 것으로 간주합니다.
            </DotText>
          </Stack>
        </Stack>
      </Stack>

      <Footer>
        <Button
          full
          height={50}
          backgroundColor="#50BF50"
          disabledBgColor="#CDD1D5"
          animate={false}
          onClick={handleVocSumbit}
          disabled={diabledSubmit}
        >
          <Text size={16} weight={600} color="#FFF">
            제출
          </Text>
        </Button>
      </Footer>

      <Popup
        show={emailSettingModal.show}
        onClose={emailSettingModal.close}
        onLeftClick={emailSettingModal.close}
        onRightClick={handleEmailSettingConfirm}
        leftButtonText="취소"
        rightButtonText="설정"
        rightButtonBgColor="#50BF50"
      >
        답변 받으실 이메일을 설정하시겠습니까?
      </Popup>
    </Container>
  );
};
