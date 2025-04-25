// app/api/tops/route.ts
import { parseAnimeData, parseCharacterData, parseMangaData } from '@/utils';
import axios from 'axios';
import { NextResponse } from 'next/server';

const baseUrl = process.env.API_BASE_URL;

export function parseData(res: any, type: string) {
    let data = null;
    switch (type) {
        case 'anime':
            data = parseAnimeData(res);
            break;

        case 'manga':
            data = parseMangaData(res);
            break;

        case 'characters':
            data = parseCharacterData(res);
            break;

        default:
            break;
    }

    return data;
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type') || 'anime';

    console.log('animes top');

    const allowedTypes = ['anime', 'manga', 'characters'];
    if (!allowedTypes.includes(type)) {
        return NextResponse.json(
            { error: `Tipo '${type}' no soportado.` },
            { status: 400 }
        );
    }

    try {
        const res = await axios.get(`${baseUrl}/top/${type}`);

        if (res.status !== 200) {
            return NextResponse.json(
                { error: 'Error al obtener datos' },
                { status: 500 }
            );
        }
        const resp = parseData(res.data.data, type);

        if (resp === null) {
            return NextResponse.json(
                { error: 'Error al parsear los datos' },
                { status: 500 }
            );
        }

        return NextResponse.json(resp);
    } catch (error) {
        console.log('error => ', error);
        return NextResponse.json(
            { error: 'Error del servidor' },
            { status: 500 }
        );
    }
}
