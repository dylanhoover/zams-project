import {
    Settings,
    Plus,
    Bot,
    StretchHorizontal,
    Map,
    ChevronsUpDown
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Sidebar({ collapsed }) {
    return (
        <div className={cn(
            "border-r bg-background h-screen flex flex-col transition-all duration-300",
            collapsed ? "w-16" : "w-64"
        )}>
            <div className="p-4 border-b">
                <div className={cn("flex items-center gap-2", collapsed && "justify-center")}>
                    <div className="h-8 w-8 rounded-md bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">Z</div>
                    {!collapsed && (
                        <div>
                            <h2 className="font-semibold">Zams</h2>
                            <p className="text-xs text-muted-foreground">Platform UI</p>
                        </div>
                    )}
                </div>
            </div>

            <div className={cn("p-4", collapsed && "px-2")}>
                <Button variant="ghost" className={cn(
                    "flex items-center justify-center gap-2",
                    collapsed ? "w-full p-2" : "w-full"
                )}>
                    <Plus className="h-4 w-4" />
                    {!collapsed && "Build a Model"}
                </Button>
            </div>

            <div className={cn("px-2 py-4", collapsed && "px-1")}>
                {!collapsed && <p className="px-2 text-xs font-medium text-muted-foreground mb-2">Pages</p>}
                <nav className="space-y-1">
                    <Button variant="ghost" className={cn(
                        "justify-start",
                        collapsed ? "w-full p-2 justify-center" : "w-full"
                    )} asChild>
                        <a >
                            <Bot className={cn("h-[16px] w-[16px]", !collapsed && "mr-2")} />
                            {!collapsed && "Models"}
                        </a>
                    </Button>
                    <Button variant="ghost" className={cn(
                        "justify-start bg-accent",
                        collapsed ? "w-full p-2 justify-center" : "w-full"
                    )} asChild>
                        <a>
                            <StretchHorizontal className={cn("h-[16px] w-[16px]", !collapsed && "mr-2")} />
                            {!collapsed && "Datasources"}
                        </a>
                    </Button>
                    <div className={cn(
                        "flex items-center",
                        collapsed ? "justify-center p-2" : "justify-between px-3 py-2"
                    )}>
                        <div className="flex items-center">
                            <Map className={cn("h-[16px] w-[16px]", !collapsed && "mr-2")} />
                            {!collapsed && <span>Workflows</span>}
                        </div>
                        {!collapsed && <span className="text-xs bg-muted px-2 py-0.5 rounded">Coming soon</span>}
                    </div>
                    <Button variant="ghost" className={cn(
                        "justify-start",
                        collapsed ? "w-full p-2 justify-center" : "w-full"
                    )} asChild>
                        <a>
                            <Settings className={cn("h-[16px] w-[16px]", !collapsed && "mr-2")} />
                            {!collapsed && "Settings"}
                        </a>
                    </Button>
                </nav>
            </div>

            <div className={cn(
                "mt-auto p-4 border-t",
                collapsed && "flex justify-center"
            )}>
                {collapsed ? (
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">J</div>
                ) : (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">J</div>
                            <div>
                                <p className="text-sm font-medium">John Doe</p>
                                <p className="text-xs text-muted-foreground">john.doe@zams.com</p>
                            </div>
                        </div>
                        <ChevronsUpDown className="h-4 w-4" />
                    </div>
                )}
            </div>
        </div>
    );
}