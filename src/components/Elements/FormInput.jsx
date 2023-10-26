import { useField } from "formik";

const FormInput = ({...props}) => {
    const [field, meta ] = useField(props)
    return (
        <div>
            <input
                {...field}
                {...props}
                className={`w-full border rounded-lg px-7 mt-2 py-2 ${meta.touched && meta.error ? 
                    'border-red-500' : 'border-gray-300'}`}
            />
            {meta.touched && meta.error && (
                <div className="text-red-500">{meta.error} </div>
            )}
        </div>
    )
}

export default FormInput