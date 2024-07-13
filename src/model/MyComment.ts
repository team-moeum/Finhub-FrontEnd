export interface MyCommentProp {
    commentId: number;
    columnId: number;
    title: string;
    imgUrl: string;
    comment: string;
    totalLike: number;
    date: string;
}

export interface MyComment {
    mycomment: MyCommentProp[],
}