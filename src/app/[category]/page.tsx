'use client'

import * as S from './page.style';
import Link from 'next/link';
import Button from '@/app/components/Button';
import { useEffect, useState } from 'react';

type itemTypes = {
    id: number;
    title: string;
}

type categoryTitleTypes = {
    [key: string]: string;
}


export default function Category({ params }: { params: {category: string}}) {
    const [data, setData] = useState<itemTypes[]>([]);
    const categoryTitle: categoryTitleTypes = {
        'stock': '주식',
        'etf': 'etf',
        'fund': '펀드',
        'irp': 'irp',
    };
      
    useEffect(() => {
        async function fetchData() {
            const respons = await fetch(`http://localhost:3000/api/${params.category}`);
            const result = await respons.json();

            setData(result);
        }
        fetchData();
      }, [params]);

    return(
        <S.container>
            <S.title>{categoryTitle[params.category]}</S.title>
            <S.list>
                {data &&
                    data.map((item) => (
                        <Link key={item.id} href={`/${params.category}/${item.id}`}>
                            <Button
                                width='100%'
                                height={50}
                                style={{
                                    background: '#eee',
                                    color: '#000',
                                    textAlign: 'left',
                                    padding: '0 10px',
                                    fontSize: '1em'
                                }}
                                animate
                                ripple
                             >
                                 {item.title}
                            </Button>
                        </Link>
                    ))
                }
            </S.list>
        </S.container>
    )
}
