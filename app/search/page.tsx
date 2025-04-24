"use client";
import { renderAnimeCards } from "@/utils";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!query) return;

        const res = axios.get(`/api/search?anime=${query}`).then((res) => {
            setResults(res.data);
            return res.data;
        });
    }, [query]);

    return <>{renderAnimeCards(results)}</>;
}
