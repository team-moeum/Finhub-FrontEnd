import { useEffect, useMemo, useState } from "react";

import { SearchRequestType, SearchResult } from "@/model/SearchTopic";
import { useSearchGptColumn, useSearchTopic } from "@/states/server/queries";
import { isEmpty } from "@/utils/isEmpty";

type UseSearchProps = {
  type: SearchRequestType,
  keyword: string,
}

export const useSearch = ({
  type,
  keyword,
}: UseSearchProps) => {
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  
  const {
    data: searchTopicData,
    fetchNextPage: fetchTopicNextPage,
    hasNextPage: hasTopicNextPage,
    isFetching: isTopicFetching,
  } = useSearchTopic({ type: type, keyword: keyword, page: 0 });

  const {
    data: searchColumnData,
    fetchNextPage: fetchColumnNextPage,
    hasNextPage: hasColumnNextPage,
    isFetching: isColumnFetching,
  } = useSearchGptColumn({ type: type, keyword: keyword, page: 0 });
  
  const resultTopicSearchList = useMemo(() => {
    return searchTopicData?.pages.map(page => page.result).flat() as SearchResult[];
  }, [searchTopicData])

  const resultColumnSearchList = useMemo(() => {
    return searchColumnData?.pages.map(page => page.result).flat() as SearchResult[];
  }, [searchColumnData])

  useEffect(() => {
    if (!isTopicFetching && !isColumnFetching) {
      if (
        isEmpty(resultTopicSearchList) &&
        isEmpty(resultColumnSearchList)
      ) setIsResultEmpty(true);
      else setIsResultEmpty(false);
    }
  }, [isTopicFetching, isColumnFetching, resultTopicSearchList, resultColumnSearchList]);

  return {
    isResultEmpty,
    topicInfiniteQuery: {
      resultTopicSearchList,
      fetchTopicNextPage,
      hasTopicNextPage,
      isTopicFetching,
    },
    columnInfiniteQuery: {
      resultColumnSearchList,
      fetchColumnNextPage,
      hasColumnNextPage,
      isColumnFetching
    }
  }
}