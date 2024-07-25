"use client";

import { useEffect, useMemo } from "react";
import { Box } from "@/components/Box";
import { FlexBox } from "@/components/FlexBox";
import { PressBox } from "@/components/PressAnimator";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Alarm } from "@/model/Alarm";
import { useAlarmInfiniteQuery } from "@/states/server/queries";

import NotifyItemIcon from '@/public/icons/notify_item_icon.svg';
import { useReadAlram } from "@/states/server/mutations";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/Toast/useToast";
import {  useQueryClient } from "@tanstack/react-query";

const parseDate = (date?: string) => {
  if (!date) return "";
  return `${date.slice(5, 7)}/${date.slice(8, 10)} ${date.slice(11, 16)}`
}

const getTextOverflowStyle = (lineClamp: number): React.CSSProperties => {
  return {
    display: "-webkit-box",
    WebkitLineClamp: lineClamp,
    overflow: "hidden",
    wordBreak: "break-all",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
  }
};

const NotifyItem = ({
  title,
  message,
  sentAt,
  receivedAt,
  onClick,
}: Partial<Alarm> & { onClick: () => void }) => {
  return (
    <PressBox onClick={onClick}>
      <FlexBox py={16} gap={18} justifyContent="flex-start">
        <FlexBox flex='auto 0 0' position="relative" width={44} height={44} radius='50%' backgroundColor="#F3FCF2">
          <NotifyItemIcon />
          {!receivedAt && <Box position="absolute" top={0} right={0} width={10} height={10} radius="50%" backgroundColor="#FE835C" />}
        </FlexBox>
        <Stack gap={3}>
          <Text size={15} weight={600} color="#25292C" style={getTextOverflowStyle(1)}>{title}</Text>
          <Text size={12} weight={500} color="#A6ABAF" style={getTextOverflowStyle(3)}>{message}</Text>
          <Text size={10} weight={400} color="#CDD1D5">{parseDate(sentAt)}</Text>
        </Stack>
      </FlexBox>
    </PressBox>
  )
}

export const NotifyScreen = () => {
  const router = useRouter();
  const { showToast } = useToast();

  const {
    data,
    hasNextPage,
    fetchNextPage
  } = useAlarmInfiniteQuery({ size: 10 });

  const queryClient = useQueryClient();
  const readAlarmMutation = useReadAlram({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["alarm"],  refetchType: 'all' });
    },
    onError: () => {
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning" });
    }
  })

  const alarmList = useMemo(() => {
    return data?.pages.flatMap(page => page) as Alarm[] ?? [];
  }, [data]);

  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    if (hasNextPage && isIntersecting) fetchNextPage();
  }, [hasNextPage, isIntersecting])

  const handleClick = (item: Alarm) => {
    if (!item.receivedAt) {
      readAlarmMutation.mutate({ id: item.id });
    }

    router.push(item.url);
  }

  if (alarmList.length === 0) return null;
  return (
    <Stack>
      {alarmList.map(item =>
        <NotifyItem
          key={item.id}
          title={item.title}
          message={item.message}
          sentAt={item.sentAt}
          receivedAt={item.receivedAt}
          onClick={() => handleClick(item)}
        />
      )}
      <Box ref={ref} height={20} />
    </Stack>
  )
}