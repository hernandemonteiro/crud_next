interface BotaoProps {
    children: any;
    className?: string;
    cor?: 'green' | 'blue' | 'gray';
    click?: any;
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray';
    return (
        // refatorar uso de props em cor (from-${cor}-600 to-${cor}-400)
        <button
            onClick={props.click}
            className={`bg-gradient-to-r p-3 m-2
                    text-white font-bold rounded-md hover:opacity-80
                    ${props.className}`}
        >
            {props.children}

        </button>
    )
}