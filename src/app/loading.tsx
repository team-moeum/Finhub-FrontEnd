
type LoadingProps = {
    margin?: string | number,
    center?: boolean;
} & React.HTMLAttributes<HTMLDivElement>

export default function Loading({margin, center, style}:LoadingProps) {
    const centerStyle = {display: "flex", alignItems: "center", justifyContent: "center"};
    const combinedStyle = center ? { ...centerStyle, margin, ...style } : { margin, ...style };
    return (
        <div className="loader" style={combinedStyle}></div>
    )
}
