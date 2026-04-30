import "./contacts.css"
import { useForm } from "react-hook-form";

export function Contacts() {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Form submitted successfully!");
    };

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label> Name</label>
                <input
                    {...register("name", {
                        required: "Name is required",
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
                {errors.name && <p>{errors.name.message}</p>}

                <label>Secure Email</label>
                <input
                    type="email"
                    {...register("secureemail", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email format"
                        }
                    })}
                />
                {errors.secureemail && <p>{errors.secureemail.message}</p>}

                {/* PHONE NUMBER */}
                <label>Contact Number</label>
                <input
                    type="tel"
                    {...register("contactnumber", {
                        required: "Contact number is required",
                        pattern: {
                            value: /^[0-9]{11,15}$/,
                            message: "Enter valid phone number (11-15 digits)"
                        }
                    })}
                />
                {errors.contactnumber && <p>{errors.contactnumber.message}</p>}

                {/* MESSAGE */}
                <label>Message</label>
                <textarea
                    rows="5"
                    {...register("message", {
                        required: "Message is required",
                        minLength: {
                            value: 10,
                            message: "Message should be at least 10 characters"
                        }
                    })}
                />
                {errors.message && <p>{errors.message.message}</p>}

                <button type="submit">Send Message</button>

            </form>

        </div>
    );
}