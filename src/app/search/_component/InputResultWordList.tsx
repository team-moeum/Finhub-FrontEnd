import stlye from './InputResultWordList.module.css'

type ItemProps = {
    title: string;
    content: string;
}

const Item = ({title, content} : ItemProps) => {
    return (
        <div className={stlye.item_box}>
            <span className={stlye.title}>{title}</span>
            <span className={stlye.content}>{content}</span>
        </div>
    )
}

type dataType = {
    data : Array<{title: string; content: string;}>
}

export default function InputResultWordList({data}: dataType) {

    return (
        <div className={stlye.container}>
            {data.map((v, i) => (
                <Item key={i} title={v.title} content={v.content}/>
            ))}
        </div>
    )
}

