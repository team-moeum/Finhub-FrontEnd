"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./CategoryCard.css";

import { useBannerList } from "@/states/server/queries";

import { Banner } from "@/model/Banner";

import { Box } from "@/components/Box";
import { FlexBox } from "@/components/FlexBox";
import { FlexRow } from "@/components/FlexRow";
import { PressButton } from "@/components/PressAnimator";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

const BannerCard = ({
  title,
  subTitle,
  bannerType,
  landPageUrl,
  bannerImgUrl
}: Partial<Banner>) => {
  const router = useRouter();

  const handleClick = () => {
    if (landPageUrl) router.push(landPageUrl);
  };

  return (
    <PressButton onClick={handleClick}>
      <Box
        position="relative"
        radius={24}
        height={120}
        boxShadow="2px 3px 10px 0px rgba(0, 0, 0, 0.10)"
        style={{ overflow: "hidden" }}
      >
        <Box
          position="absolute"
          width={182}
          height={182}
          radius="50%"
          left={-64}
          top={-33}
          backgroundColor="#C0F5B8"
        />
        <FlexRow height="100%" justifyContent="flex-end">
          <Image
            src={bannerImgUrl || "/images/default_banner_pig"}
            alt={"pig-icon"}
            width={157}
            height={107}
            priority
            style={{
              position: "absolute",
              left: -20
            }}
          />
          <FlexBox
            alignItems="flex-start"
            justifyContent="flex-start"
            width="calc(100% - 115px)"
            height="100%"
            direction="column"
            padding={16}
          >
            <Box
              position="absolute"
              top={16}
              right={16}
              padding={"2px 12px 5px 12px"}
              backgroundColor="#F3FCF2"
              radius={20}
            >
              <Text size={11} weight={700} color="#50BF50">
                {bannerType}
              </Text>
            </Box>
            <Stack mt={32} gap={3}>
              <Text size={16} weight={700} color="#191B1C">
                {title}
              </Text>
              <Text size={12} weight={500} color="#CDD1D5">
                {subTitle}
              </Text>
            </Stack>
          </FlexBox>
        </FlexRow>
      </Box>
    </PressButton>
  );
};

export default function CategoryCard() {
  const { data: bannerList } = useBannerList();

  const reversedBannerList = useMemo(() => {
    return Array.isArray(bannerList) ? [...bannerList].reverse() : [];
  }, [bannerList]);

  return (
    <div className="overflow-wrap">
      <Swiper
        className="cg_card_swiper"
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        speed={1000}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {reversedBannerList.map(item => (
          <SwiperSlide key={item.id}>
            <BannerCard
              title={item.title}
              subTitle={item.subTitle}
              bannerType={item.bannerType}
              landPageUrl={item.landPageUrl}
              bannerImgUrl={item.bannerImgUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
