"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [instagram, setInstagram] = useState("");

    function hexToDecimal(hex: string) {
        return parseInt(hex.replace("#", ""), 16)
    }

    function send() {
        if (submitted === true) return;
        if (!name || !whatsapp) return;

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1326330324241874944/JrDowvD60dYM-OANZ5IP9AeeXGi60bklSzW5yiDQPdhDbQbDt7t7d4qbMBLE8pVJxd1I");

        request.setRequestHeader('Content-type', 'application/json');

        const params = {
            username: name ?? "No Name",
            content: `<@741292272661954651>`,
            embeds: [
                {
                    fields: [
                        {
                            name: "WhatsApp",
                            value: `${whatsapp ?? "No WhatsApp"}`
                        },
                        {
                            name: "Instagram",
                            value: `${instagram ?? "No Instagram"}`
                        }
                    ],
                    color: hexToDecimal("#ffffff"),
                    footer: {
                        text: `${new Date().toLocaleString()}`
                    },
                }
            ]
        }

        request.send(JSON.stringify(params));
        setSubmitted(true);
    }

    return (
        <main className={cn("flex flex-col justify-center items-center h-full w-full max-w-screen min-h-screen min-w-screen bg-white text-black p-4 md:p-8")}>
            <div className="flex flex-col justify-center items-center gap-4 p-6 border-white/15 rounded-2xl">
                <h2 className="text-2xl">Contact Form</h2>

                <Input type="text" name="name" placeholder="Your Name *" maxLength={48} required onChange={(e) => setName(e.target.value)} />

                <Input type="text" name="whatsapp" placeholder="Your WhatsApp Number *" maxLength={20} required onChange={(e) => setWhatsapp(e.target.value)} />

                <Input type="text" name="instagram" placeholder="Your Instagram Handle" maxLength={20} onChange={(e) => setInstagram(e.target.value)} />

                <Button onClick={send} disabled={submitted === true}>Confirm</Button>

                <h2 className="text-black/75">We will reach out to you on WhatsApp within 48 hours.</h2>
            </div>

            <GridPattern
                width={100}
                height={100}
                x={-1}
                y={-1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
            />
        </main>
    )
}