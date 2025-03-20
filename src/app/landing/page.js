"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown, Paperclip, Send } from "lucide-react";
export default function LandingPage() {
    const [message, setMessage] = useState("");
    const [responseType, setResponseType] = useState("Default");

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-white">
            <div className="w-full max-w-2xl px-4">
                <div className="flex mb-2">
                    <div className="flex items-center gap-2 justify-center">
                        <svg width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="14" width="29" height="4" fill="black" />
                            <path d="M3.16013 3.71548L15.1095 14.2651L12.7799 16.9039L0.830465 6.35425L3.16013 3.71548Z" fill="black" />
                            <path d="M14 14.5497L25.9494 4.00006L28.2791 6.63882L16.3297 17.1885L14 14.5497Z" fill="black" />
                            <rect x="13" y="16.91" width="16.91" height="3.52" transform="rotate(-90 13 16.91)" fill="black" />
                        </svg>
                        <span className="text-2xl font-medium">zams</span>
                    </div>
                </div>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#070608] via-[#311D3A] via-[#512A51] via-[#8C417D] to-[#B7549B] bg-clip-text text-transparent inline-block">
                        Hey there,
                    </h1>
                    <h2 className="text-3xl font-bold ">
                        <span className="bg-gradient-to-r from-zinc-900 via-fuchsia-900 to-indigo-600 bg-clip-text text-transparent">What&apos;d you like to ask today?</span>
                    </h2>
                </div>
                <div className="border rounded-lg shadow-sm">
                    <Textarea
                        placeholder="Ask whatever you want..."
                        className="min-h-[100px] border-0 focus-visible:ring-0 resize-none p-4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className="flex items-center justify-between p-3 border-t">
                        <div className="flex items-center gap-2">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                                        <span>{responseType === "Default" ? "Response Type" : responseType}</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-56" align="start">
                                    <div className="space-y-1">
                                        {["Default", "Detailed", "Concise", "Technical", "Simple"].map((type) => (
                                            <Button
                                                key={type}
                                                variant={responseType === type ? "secondary" : "ghost"}
                                                className="w-full justify-start"
                                                onClick={() => setResponseType(type)}
                                            >
                                                {type}
                                            </Button>
                                        ))}
                                    </div>
                                </PopoverContent>
                            </Popover>
                            <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                                <Paperclip className="h-4 w-4" />
                                <span>Add Attachment</span>
                            </Button>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">0/1000</span>
                            <Button size="sm" className="rounded-full bg-black text-white hover:bg-gray-800">
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-0 left-0 right-0 p-4 text-center text-xs text-muted-foreground bg-background border-t">
                    <p>
                        Your chats aren't used to train our models. Obviously AI may make mistakes, so please double-check. Your privacy is our priority.
                    </p>
                </div>
            </div>
        </div>
    );
}