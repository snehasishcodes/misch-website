"use client";

import { Progress } from "@/components/ui/progress";
import { animatePageIn } from "@/lib/animations";
import { useEffect, useState } from "react";

export default function Loading() {
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        const randomValue = Math.floor(Math.random() * 10);

        setInterval(() => {
            setValue((v) => {
                if (v >= 100) return 100;
                return v + randomValue;
            });
        }, 50);
        animatePageIn();
    }, []);

    return (
        <div id="loading-page" className="fixed inset-0 z-50 bg-black text-white h-screen w-screen flex flex-col justify-center items-center gap-4">
            <div className="w-full sm:w-[400px] flex flex-col justify-center items-center gap-4">
                <h2 className="text-6xl font-medium">misch</h2>
                <span>{value}%</span>

                <Progress value={value} className="h-[6px]" />
            </div>
        </div>
    )
}