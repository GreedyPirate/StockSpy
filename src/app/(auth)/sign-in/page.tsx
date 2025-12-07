'use client'
import InputItem from '@/components/form/InputItem'
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button'
import FooterLink from '@/components/FooterLink'
import { SignInWithEmailStyle } from '@/lib/actions';
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/userStrore';
const SignIn = () => {
    const router = useRouter()
    const { setUserInfo } = useUserStore();
    const { register, handleSubmit, control, formState: { errors, isSubmitting }, } = useForm<SignInFormData>({
        defaultValues: { email: '', password: '' },
        mode: 'onBlur',
    })
    const onSubmit = async (data: SignInFormData) => {
        const response = await SignInWithEmailStyle(data);
        if (!response.success) {
            toast.error(response.message || 'Sign in failed. Please try again.')
            return
        }
        if (!response.user) {
            toast.error('User info is missing.');
            return
        }
        setUserInfo(response.user);
        router.push('/')
    }

    return (
        <div className='flex-1 flex flex-col justify-center'>

            <h1 className='form-title'>Login Your Account</h1>
            <form className="lg:w-[80%] xl:w-[90%] 2xl:w-[85%] space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <InputItem
                    label='Email'
                    type='email'
                    error={errors.email}
                    register={register}
                    name='email'
                    rules={{ required: 'email is required' }}
                    placeholder='Enter your email'
                />
                <InputItem
                    label='Password'
                    type='password'
                    error={errors.password}
                    register={register}
                    name='password'
                    rules={{ required: 'password is required' }}
                    placeholder='Enter your password'
                />
                <div className='flex justify-center items-center'>
                    <Button type="submit" disabled={isSubmitting} className="w-[60%] yellow-btn mt-10">
                        {isSubmitting ? 'Signing In' : 'Sign In'}
                    </Button>
                </div>
                <FooterLink href="/sign-up" text="Don't have an account?" label='Sign Up' />
            </form>
        </div>
    )
}
export default SignIn
