import { useForm } from "react-hook-form";

export function Contacts() {
    const { handleSubmit, watch, register, formState: { errors, isSubmitting } } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(() => {})}>

                <label>Officer Name</label>
                <input
                    {...register("officername", {
                        required: "true",
                        maxLength: {
                            value: 15,
                            message: "Max length should be 15"
                        },
                        minLength: {
                            value: 6,
                            message: "Min length should be 6"
                        }
                    })}
                />

                {errors.officername && <p>{errors.officername.message}</p>}

                <label>Secure Email</label>
                <input
                    {...register("secureemail", {
                        required: true,
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email format"
                        }
                    })}
                />

                {errors.secureemail && <p>{errors.secureemail.message}</p>}

            </form>
        </div>
    );
}