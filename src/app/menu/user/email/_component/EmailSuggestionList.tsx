import style from "./UpdateEmail.module.css";

const domains: string[] = [
  "naver.com",
  "hanmail.net",
  "daum.net",
  "gmail.com",
  "nate.com",
  "yahoo.com",
  "outlook.com",
  "kakao.com"
];

export const EmailSuggestionList = ({
  id,
  onSelect
}: {
  id: string;
  onSelect: (value: string) => void;
}) => {
  return (
    <ul className={style.suggestion_list_wrapper}>
      {domains.map((domain: string) => (
        <li key={domain} onClick={() => onSelect(`${id}@${domain}`)}>{`${id}@${domain}`}</li>
      ))}
    </ul>
  );
};
