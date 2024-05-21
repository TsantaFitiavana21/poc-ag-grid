export const Icon = ({ className, children, onClick }: IconProps) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

type IconProps = {
    className?: string
    children: React.ReactNode
    onClick?: () => void
}
