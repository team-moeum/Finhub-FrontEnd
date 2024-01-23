import styled from "@emotion/styled"

export const container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 65px 20px;
    width: 100%;
    gap: 1em;
`

export const title = styled.div`
    width: 100%;
    font-size: 1.5em;
    padding: 10px 0;
    text-align: left;
`

export const list = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const itemCard = styled.div`
    padding: 10px;
    color: #000;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 1em;
`

export const skeletonContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px
`