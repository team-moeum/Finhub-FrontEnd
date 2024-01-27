import styled from "@emotion/styled"

export const container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 65px 20px;
    width: 100%;
    height: 100%;
    background: #000;
`

export const inputWarp = styled.div`
    display: flex;
    gap: 10px;
    font-size: 1.5em;
    padding: 10px 0;
    text-align: left;
    background: #FFF;
    border-radius: 8px;
    width: 100%;
    padding-left: 10px;
`

export const input = styled.input`
    flex-grow: 1;
    outline: 0;
    border: 0;
    background: none;
    font-size: 1em;
`

export const result = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #FFF;
`

export const resultInit = styled.div`
    text-align: center;

    p:nth-child(1) {
        font-size: 1.2em;
        margin-bottom: 10px;
    }
    p:nth-child(2) {
        font-size: 0.9em;
        color: #b4b2b2;
    }
`

export const resultItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #FFF;
`