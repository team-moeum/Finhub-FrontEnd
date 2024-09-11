import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

import { useAddRecentSearchState } from "./useRecentSearch";

import { recentSearchState } from "@/states/client/atoms/recentSearch";

import { debounce } from "@/utils/debounce";

export const useInput = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("from");
  const inputRef = useRef<HTMLInputElement>(null);

  const recentSearchList = useRecoilValue(recentSearchState);
  const setRecentSearchState = useAddRecentSearchState();

  const [userInput, setUserInput] = useState<string>("");
  const [fetchInput, setFetchInput] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isResultPage, setIsResultPage] = useState<boolean>(false);

  useEffect(() => {
    if (search === "home" && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    setIsResultPage(userInput !== "");
  }, [userInput]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) return setUserInput("");
    setUserInput(e.target.value);
    setFetchInput(e.target.value);
    setRecentSearchState(e.target.value);
  };
  const debouncedOnChangeHandler = debounce<typeof onChangeHandler>(onChangeHandler, 500);

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = (e.currentTarget.elements.namedItem("searchInput") as HTMLInputElement)
      .value;

    /* 동일 input 방지 */
    if (recentSearchList[0].keyword !== inputValue) {
      setUserInput(inputValue);
    }
  };

  const hanldeClearBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
      setUserInput("");
    }
  };

  const handleOnFocus = () => {
    setIsFocus(true);
  };

  const handleOnBlur = () => {
    setIsFocus(false);
  };

  const handleSetInputValue = (value: string) => {
    if (inputRef.current) {
      inputRef.current.value = value;
      setUserInput(value);
      setFetchInput(value);
    }
  };

  const handleClickBackPress = () => {
    setIsResultPage(false);
  };

  return {
    inputRef,
    userInput,
    fetchInput,
    isFocus,
    isResultPage,
    debouncedOnChangeHandler,
    handleInputSubmit,
    hanldeClearBtn,
    handleOnFocus,
    handleOnBlur,
    handleSetInputValue,
    handleClickBackPress
  };
};
