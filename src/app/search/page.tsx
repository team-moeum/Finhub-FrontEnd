import style from "./search.module.css";

export default async function SearchPage() {
    return (
        <div className={style.container}>
            <div className={style.input_container}>
                <input className={style.inputBox} placeholder="찾고 싶은 단어를 입력해주세요." />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 4.5C7.88401 4.5 4.75 7.63401 4.75 11.5C4.75 15.366 7.88401 18.5 11.75 18.5C15.616 18.5 18.75 15.366 18.75 11.5C18.75 7.63401 15.616 4.5 11.75 4.5ZM2.75 11.5C2.75 6.52944 6.77944 2.5 11.75 2.5C16.7206 2.5 20.75 6.52944 20.75 11.5C20.75 16.4706 16.7206 20.5 11.75 20.5C6.77944 20.5 2.75 16.4706 2.75 11.5Z" fill="current"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6929 16.4429C17.0834 16.0524 17.7166 16.0524 18.1071 16.4429L22.4571 20.7929C22.8476 21.1834 22.8476 21.8166 22.4571 22.2071C22.0666 22.5976 21.4334 22.5976 21.0429 22.2071L16.6929 17.8571C16.3024 17.4666 16.3024 16.8334 16.6929 16.4429Z" fill="current"/>
                </svg>
            </div>
            <div className={style.history_container}>
                <div className={style.history_title}>최근 검색어</div>
            </div>
        </div>
    );
}
