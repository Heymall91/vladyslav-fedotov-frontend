export default function Input({type, name, id, placeholder, value, onChange, maxLength}) {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength} 
            required
        />
    )
}