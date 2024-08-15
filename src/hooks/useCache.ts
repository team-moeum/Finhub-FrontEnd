import { useRecoilState } from "recoil";

import { cacheState } from "@/states/client/atoms/cache";

export function useCache<T = any>() {
  const [cache, setCache] = useRecoilState(cacheState);

  const get = (key: string): T | undefined => {
    return cache[key] as T | undefined;
  };

  const set = (key: string, value: T) => {
    setCache(prevCache => ({
      ...prevCache,
      [key]: value
    }));
  };

  const clear = (key: string) => {
    setCache(prevCache => {
      const { [key]: _, ...rest } = prevCache;
      return rest;
    });
  };

  return { get, set, clear };
}
