export interface gptColumn {
    id: number,
    title: string,
    date: string,
    backgroundImgUrl: string,
    topicList: {id: number, title: string}[]
}

export interface gptColumnDetail extends gptColumn {
    content: string,
    summary: string,
    totalLike: number,
    scrapped: boolean,
    liked: boolean
}

export interface gptColumnComment {
    id: number,
    nickname: string,
    date: string,
    avatarImgPath: string | null,
    comment: string,
    like: number,
    userComment: boolean,
    userLike: boolean,
    writerId: number
}

export interface CommentPageInfo {
    currentPage: number,
    totalPages: number,
    pageSize: number,
    totalElements: number
}