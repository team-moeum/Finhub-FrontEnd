import style from './NoSearchResult.module.css';

export default function NoSearchResult({userInput}: {userInput : string}) {
    return (
        <div className={style.container}>
            <div className={style.icon_box}>
                <svg xmlns="http://www.w3.org/2000/svg" width="143" height="143" viewBox="0 0 143 143" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M143 71.5C143 110.988 110.988 143 71.5 143C32.0116 143 0 110.988 0 71.5C0 32.0116 32.0116 0 71.5 0C110.988 0 143 32.0116 143 71.5ZM71.5001 44.6875C68.2032 44.6875 65.3117 46.468 63.7528 49.1627C61.2812 53.4354 55.8139 54.8955 51.5412 52.4239C47.2686 49.9522 45.8085 44.4849 48.2801 40.2123C52.9026 32.2213 61.5645 26.8125 71.5001 26.8125C86.3083 26.8125 98.3126 38.8169 98.3126 53.625C98.3126 65.2993 90.8515 75.231 80.4376 78.9118V80.4375C80.4376 85.3735 76.4362 89.375 71.5001 89.375C66.5641 89.375 62.5626 85.3735 62.5626 80.4375V71.5C62.5626 66.564 66.5641 62.5625 71.5001 62.5625C76.4362 62.5625 80.4376 58.561 80.4376 53.625C80.4376 48.689 76.4362 44.6875 71.5001 44.6875ZM71.5 116.188C76.436 116.188 80.4375 112.186 80.4375 107.25C80.4375 102.314 76.436 98.3125 71.5 98.3125C66.564 98.3125 62.5625 102.314 62.5625 107.25C62.5625 112.186 66.564 116.188 71.5 116.188Z" fill="#F3F3F3"/>
                </svg>
            </div>
            <div className={style.text_box}>
                <span><span className={style.user_input_text}>&apos;{userInput}&apos;</span>에 대한 검색 결과가 없습니다.</span>
                <span className={style.dot}>· 단어의 철자가 정확한지 확인해 주세요.</span>
                <span className={style.dot}>· 다른 검색어로 다시 검색해 보세요.</span>
            </div>
        </div>
    )
}