'use client'
import InputItem from '@/components/form/InputItem'
import { useForm } from "react-hook-form"
import { SelectionList } from '@/components/form/SelectionList'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, PROFESSION, RISK_TOLERANCE_OPTIONS } from '@/lib/Constants'
import { Button } from '@/components/ui/button'
import FooterLink from '@/components/FooterLink'
import CountrySelectItem from '@/components/form/CountrySelectItem'
import { toast } from "sonner"
import {SignUpWithEmailStyle} from "@/lib/actions/";
import { useRouter } from 'next/navigation'
const SignUp = () => {
    const router = useRouter()
    const { register, handleSubmit, control, formState: { errors, isSubmitting }, } = useForm<SignUpFormData>({
        defaultValues: { fullName: '', email: '', password: '', country: '', profession:'', investmentGoals: '', riskTolerance: '', preferredIndustry: '' },
        mode: 'onBlur',
    })

    const onSubmit = async (formData: SignUpFormData) => {
       const response = await SignUpWithEmailStyle(formData)
       console.log('user sign up', response)
       if (!response.success) {
            toast.error(response.message || 'Sign up failed. Please try again.')
            return
        }
        router.push('/verification')
    }
    const vaildStrongPwd = (pwd: string) => {
        const strongPwdRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
        return strongPwdRegex.test(pwd) || "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
    }
    return (
        <div>
            <h1 className='form-title'>Sign Up & Personalize</h1>
            <div>
                <form className="lg:w-[80%] xl:w-[90%] 2xl:w-[85%] space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    <InputItem
                        label='Full Name'
                        error={errors.fullName}
                        register={register}
                        name='fullName'
                        rules={{ required: 'full name is required' }}
                        placeholder='Enter your full name' />
                    <InputItem
                        label='Email'
                        type='email'
                        error={errors.email}
                        register={register}
                        name='email'
                        rules={{
                            required: 'email is required',
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: 'Please enter a valid email address'
                            }
                        }}
                        placeholder='Enter your email' />
                    <InputItem
                        label='Password'
                        type='password'
                        error={errors.password}
                        register={register}
                        name='password'
                        rules={{ required: 'password is required', validate: vaildStrongPwd }}
                        placeholder='Enter your password' />
                    <CountrySelectItem
                        name='country'
                        label='Country'
                        control={control}
                        error={errors.country} />
                        
                    <SelectionList
                        label='PROFESSION'
                        name='profession'
                        placeholder='Select your profession'
                        control={control}
                        options={PROFESSION}
                        error={errors.profession} />
                    <SelectionList
                        label='Investment Goals'
                        name='investmentGoals'
                        placeholder='Select your investment goals'
                        control={control}
                        options={INVESTMENT_GOALS}
                        error={errors.investmentGoals} />
                    <SelectionList
                        name="riskTolerance"
                        label="Risk Tolerance"
                        placeholder="Select your risk level"
                        options={RISK_TOLERANCE_OPTIONS}
                        control={control}
                        error={errors.riskTolerance}
                    />
                    <SelectionList
                        name="preferredIndustry"
                        label="Preferred Industry"
                        placeholder="Select your preferred industry"
                        options={PREFERRED_INDUSTRIES}
                        control={control}
                        error={errors.preferredIndustry}
                    />

                    <div className='flex justify-center items-center'>
                        <Button type="submit" disabled={isSubmitting} className="w-[80%] yellow-btn mt-10">
                            {isSubmitting ? 'Creating Account' : 'Start Your Investing Journey'}
                        </Button>
                    </div>
                    <FooterLink href="/sign-in" text="Already have an account?" label='Sign In' />
                </form>
            </div>
        </div>
    )
}
export default SignUp
