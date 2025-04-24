// app/api/tops/route.ts
import { parseAnimeData } from "@/utils";
import axios from "axios";
import { NextResponse } from "next/server";

const baseUrl = process.env.API_BASE_URL;

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("anime");

    console.log(`type ${type}`);

    if (type === "") {
        return NextResponse.json(
            { error: `No se han pasado datos` },
            { status: 400 },
        );
    }

    try {
        const res = await axios.get(`${baseUrl}/anime?q=${type}`);

        if (res.status !== 200) {
            return NextResponse.json(
                { error: "Error al obtener datos" },
                { status: 500 },
            );
        }

        const resp = parseAnimeData(res.data.data);
        if (resp === null) {
            return NextResponse.json(
                { error: "Error al parsear los datos" },
                { status: 500 },
            );
        }
        return NextResponse.json(resp);
    } catch (error) {
        console.log("error => ", error);
        return NextResponse.json(
            { error: "Error del servidor" },
            { status: 500 },
        );
    }
}
