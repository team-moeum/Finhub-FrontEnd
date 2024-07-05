"use client";

import style from "./PostScreen.module.css";

import Image from "next/image";
import PostImg from "@/public/post_image.png";
import PostContent from "./PostContent";
import { queryKeys, useNextTopic, useTopicInfo } from "@/states/server/queries";
import PostNav from "../Nav/PostNav";
import { jsToNative } from "@/utils/jsToNative";
import { Box } from "@/components/Box";
import { FlexBox } from "@/components/FlexBox";

import ArrowRightIcon from '@/public/icons/icon_arrow_right.svg';
import { Text } from "@/components/Text";
import { LinkButton } from "@/components/LinkButton";
import { useToast } from "@/components/Toast/useToast";
import { useScrap } from "@/states/server/mutations";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ScrapToast } from "@/components/Toast/ScrapToast";

type Props = { categoryId: number; topicId: number };
export default function PostScreen({ categoryId, topicId }: Props) {
  const { showToast } = useToast();
  
  const {
    data: { title, summary, definition, img_path, scrapped },
  } = useTopicInfo(topicId);
  const [isScrap, setIsScrap] = useState(scrapped);
  
  const { data: nextTopic } = useNextTopic(categoryId, topicId);
  
  const queryClient = useQueryClient();
  const scrapMutation = useScrap({
    onMutate: () => {
      setIsScrap(prev => !prev);
    },
    onSuccess: (data) => {
      if (data.status === "FAIL") {
        showToast({content: "잠시후 다시 시도해주세요.", type: 'warning'});
        setIsScrap(prev => !prev);
        return;
      }

      if (isScrap) {
        showToast({content: <ScrapToast />, duration: 3000});
      }

      queryClient.invalidateQueries({ queryKey: queryKeys.topicList(categoryId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.topicInfo(topicId)});
      queryClient.invalidateQueries({ queryKey: queryKeys.myScrap("topic") });
    },
    onError: () => {
      showToast({content: "잠시후 다시 시도해주세요.", type: "warning"});
      setIsScrap(prev => !prev);
    }
  });

  useEffect(() => {
      setIsScrap(scrapped);
  }, [scrapped]);

  const handleScrapClick = () => {
    scrapMutation.mutate({id: topicId, type: 1});
  };

  const handleShareClick = () => {
    jsToNative(
      { val1: "share", val2: window.location.href },
      (data: any) => { }
    );
  };

  return (
    <>
      <PostNav
        scrap={isScrap}
        onClick={handleScrapClick}
        onShare={handleShareClick}
      />
      <div className={style.image_box}>
        <Image 
          src={img_path ?? PostImg} 
          alt="post Img" 
          fill
          priority
         />
      </div>
      <div className={style.container}>
        <p className={style.title}>{title}</p>
        <div className={style.summary}>
          <div className={style.tag}>요약</div>
          <div className={style.content}>{summary}</div>
        </div>
        <div className={style.divider}></div>
        <PostContent
          categoryId={categoryId}
          topicId={topicId}
          definition={definition}
        />

        {nextTopic.id !== 0 &&
          <LinkButton href={`/${categoryId}/${nextTopic.id}`}>
            <Box
              width='100%'
              height={88}
              radius={10}
              backgroundColor="#F6F7F9"
              boxShadow="4px 4px 20px 0px rgba(0, 0, 0, 0.08)"
            >
              <FlexBox pr={34} justifyContent='space-between'>
                <Box width={70}>
                  <Image
                    src={nextTopic.img_path ?? PostImg}
                    alt="next image"
                    width={70}
                    height={88}
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                <FlexBox ml={18} flex={1} direction='column' alignItems='flex-start' gap={6}>
                  <Text size={18} weight={600} color="#25292C">다음글 보기</Text>
                  <Text size={14} weight={500} color="#A6ABAF">{nextTopic.title}</Text>
                </FlexBox>

                <ArrowRightIcon />
              </FlexBox>
            </Box>
          </LinkButton>
        }
      </div>
    </>
  );
}
