declare global {
    type SignUpFormData = {
        fullName: string;
        email: string;
        password: string;
        country: string;
        investmentGoals: string;
        riskTolerance: string;
        preferredIndustry: string;
    };

    type SignInFormData = {
        email: string;
        password: string;
    }
    type FormInputProps = {
        name: string;
        label: string;
        placeholder: string;
        type?: string;
        register: UseFormRegister<SignUpFormData>,
        rules?: RegisterOptions<SignUpFormData>,
        error: FieldError
        disabled?: boolean;
        value?: string;
    };

    type Option = {
        value: string;
        label: string;
    };

    type SelectFieldProps = {
        name: string;
        label: string;
        placeholder: string;
        options: readonly Option[];
        control: Control;
        error?: FieldError;
    };

    type CountrySelectProps = {
        name: string;
        label: string;
        control: Control<any>;
        error?: FieldError;
    };

}

export { };