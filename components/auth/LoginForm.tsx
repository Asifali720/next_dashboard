
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'


const loginSchema = z.object({
    email: z.string().min(1, {
        message: 'email required...!'
    }).email({
        message: 'please put valid email...!'
    }),
    password: z.string().min(8, {
        message: 'passworld should unique and 8 character...!'
    })
})


const LoginForm = ()=>{
   const {toast} = useToast()
   const router = useRouter()
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    
    const handlesubmit =(data:z.infer<typeof loginSchema>)=>{
       toast({
        title: 'login successfully...!',
        description: 'This is not auth because it is temporary'
       })
       router.push('/')
    }

  return(
    <div className='p-4'>
    <Form {...form} >
      <form onSubmit={form.handleSubmit(handlesubmit)}>
      <FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem className='mb-5'>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type='email' placeholder="email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Password</FormLabel>
      <FormControl>
        <Input type='password' placeholder="password" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<Button variant='default' className='w-full mt-20'>login</Button>
      </form>
    </Form>
    </div>
  )
}

export default LoginForm;