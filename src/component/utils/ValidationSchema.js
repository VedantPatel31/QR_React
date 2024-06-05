const validationSchema = {
    name: {
        required: {
            value: true,
            message: "Name is required",
        },
    },
    email: {
        required: {
            value: true,
            message: "Email is required"
        }
    },
    selected: {
        required: {
            value: true,
            message: "please select"
        }
    },
    password: {
        required: {
            value: true,
            message: "Password is required"
        },
        min: {
            value: 8,
            message: "Password must be greater than 8"
        }
    },
};
export default validationSchema