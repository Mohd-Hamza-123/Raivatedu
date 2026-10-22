import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    children: ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
    disabled?: boolean;
    className?: string;
};

const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800",
    secondary: "bg-yellow-400 text-ink hover:bg-yellow-500 active:bg-yellow-600",
    ghost: "border border-indigo-200 text-indigo-700 hover:bg-indigo-50 active:bg-indigo-100",
};

function Button({
    type = "button",
    children,
    href,
    variant = "primary",
    disabled = false,
    className = "",
}: ButtonProps) {
    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href && !disabled) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={combinedClasses} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;