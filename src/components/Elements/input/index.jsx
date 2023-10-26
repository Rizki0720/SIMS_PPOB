import Input from "./input"
import Label from "./label"

const InputForm = (props) => {
    const {label, name, type, placeholder, textInput, disabled} = props
    return (

        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} name={name} placeholder={placeholder} textInput={textInput} disabled={disabled}/>
        </div>
    )
}

export default InputForm