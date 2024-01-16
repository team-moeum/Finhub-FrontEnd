import { NextResponse } from "next/server";

type itemTypes = {
  id: number;
  title: string;
}

interface dataTypes {
  [key: string]: itemTypes[];
  stock: itemTypes[];
  fund: itemTypes[];
  etf: itemTypes[];
  irp: itemTypes[];
} 

const data:dataTypes = { 
  stock: [
    {
      id: 1,
      title: '주식이란?'
    },
    {
      id: 2,
      title: '주식이란?'
    },
    {
      id: 3,
      title: '주식이란?'
    },
    {
      id: 4,
      title: '주식이란?'
    },
    {
      id: 5,
      title: '주식이란?'
    },
    {
      id: 6,
      title: '주식이란?'
    },
  ],
  fund: [
    {
      id: 1,
      title: '펀드란?'
    },
    {
      id: 2,
      title: '펀드란?'
    },
    {
      id: 3,
      title: '펀드란?'
    },
    {
      id: 4,
      title: '펀드란?'
    },
    {
      id: 5,
      title: '펀드란?'
    },
    {
      id: 6,
      title: '펀드란?'
    },
  ],
  etf: [
    {
      id: 1,
      title: 'etf란?'
    },
    {
      id: 2,
      title: 'etf란?'
    },
    {
      id: 3,
      title: 'etf란?'
    },
    {
      id: 4,
      title: 'etf란?'
    },
    {
      id: 5,
      title: 'etf란?'
    },
    {
      id: 6,
      title: 'etf란?'
    },
  ],
  irp: [
    {
      id: 1,
      title: 'irp란?'
    },
    {
      id: 2,
      title: 'irp란?'
    },
    {
      id: 3,
      title: 'irp란?'
    },
    {
      id: 4,
      title: 'irp란?'
    },
    {
      id: 5,
      title: 'irp란?'
    },
    {
      id: 6,
      title: 'irp란?'
    },
  ]
}

export async function GET(request: Request, { params }: { params: {category: string}}) {
    const category = params.category;

    if (Object.keys(data).includes(category)) {
      return NextResponse.json(data[category], {
        status: 200,
      });
    } else {
      return NextResponse.json('', {
        status: 404,
      });
    }
}

export async function POST(request: Request) {
    const res = await request.json();
    return NextResponse.json({ res });
}