import { useMemo } from "react";

import { SearchRequestType, SearchResult } from "@/model/SearchTopic";
import { UseSearchGptColumn, useSearchTopic } from "@/states/server/queries";

type UseSearchProps = {
  type: SearchRequestType,
  keyword: string,
}

export const useSearch = ({
  type,
  keyword,
}: UseSearchProps) => {
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
  } = UseSearchGptColumn({ type: type, keyword: keyword, page: 0 });
  
  const resultTopicSearchList = useMemo(() => {
    return searchTopicData?.pages.map(page => page.result).flat() as SearchResult[];
  }, [searchTopicData])

  const resultColumnSearchList = useMemo(() => {
    return searchColumnData?.pages.map(page => page.result).flat() as SearchResult[];
  }, [searchColumnData])

  
  return {
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