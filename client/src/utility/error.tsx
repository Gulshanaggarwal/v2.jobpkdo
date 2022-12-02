
type ErrorTemplateProps = {
    message: string;
}

export default function ErrorTemplate({ message }: ErrorTemplateProps) {
    return (
        <p>{message}</p>
    )
}