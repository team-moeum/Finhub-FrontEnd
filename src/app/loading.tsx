"use client";

type LoadingProps = {
    height?: string | number;
} & React.HTMLAttributes<HTMLDivElement>

export default function Loading({height, style}:LoadingProps) {
    let centerStyle = {
        height: height ?? "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center"
    };

    return (
        <div style={{...centerStyle, ...style}}>
            <div className="loader"></div>
        </div>
    )
}
