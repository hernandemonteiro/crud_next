interface EntryProps {
    texto: string;
    tipo?: 'text' | 'number';
    placeholder?: string;
    name: string;
    somenteLeitura?: boolean;
    MinNumber?: string;
    value?: any;
    valorMudou?: (valor: any) => void


}
export default function Entry(props: EntryProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-4 mt-2">
                {props.texto}
            </label>
            <input
                className={`border border-purple-500 rounded-lg p-2
            focus:outline-none ${props.somenteLeitura ? '' : 'focus:bg-white'}
            bg-gray-200`}
                type={props.tipo ?? 'text'}
                required
                onChange={e => props.valorMudou?.(e.target.value)}
                readOnly={props.somenteLeitura}
                name={props.name}
                autoComplete='off'
                value={props.value}
                min={props.MinNumber}
                placeholder={props.placeholder} />
        </div>
    )
}