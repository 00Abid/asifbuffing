"use client";
import Link from "next/link";
import { MdHome, MdNavigateNext } from "react-icons/md";

export default function Breadcrumb(props) {
    const items = props.items || [];

    return (
        <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center space-x-2 text-sm">
                <li>
                    <Link
                        href="/"
                        className="flex items-center text-logo hover:text-accent transition-colors"
                        aria-label="Home"
                    >
                        <MdHome className="w-4 h-4" />
                    </Link>
                </li>
                {items.map(function (item, index) {
                    return (
                        <li key={index} className="flex items-center space-x-2">
                            <MdNavigateNext className="w-4 h-4 text-accent" />
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="text-logo hover:text-accent transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-dark font-medium">{item.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
