import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { useToast } from '../ui/use-toast'


const RegisterSchema = z.object({
    name: z.string().min(1, {
        message: 'name is required...!'
    }),
    email: z.string().min(1, {
        message: 'email is required...!'
    }).email({
        message: 'put valid email..!'
    }),
    password: z.string().min(8, {
        message: 'password is required...!'
    }),
    confirmPassword: z.string().min(8, {
        message: 'please confirm password...!'
    }),
})

const RegisterForm = ()=>{
    const {toast} = useToast()
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const handlesubmit =(data:z.infer<typeof RegisterSchema>)=>{
        toast({
         title: 'Register successfully...!',
         description: 'This is not auth because it is temporary'
        })
     }

    return(
     
    <div className='p-4'>
    <Form {...form} >
      <form onSubmit={form.handleSubmit(handlesubmit)}>
      <FormField
  control={form.control}
  name="name"
  render={({ field }) => (
    <FormItem className='mb-5'>
      <FormLabel>Name</FormLabel>
      <FormControl>
        <Input type='text' placeholder="name" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

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
    <FormItem className='mb-5'>
      <FormLabel>Password</FormLabel>
      <FormControl>
        <Input type='password' placeholder="password" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="confirmPassword"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Confirm Password</FormLabel>
      <FormControl>
        <Input type='password' placeholder="confirm password" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<Button variant='default' className='w-full mt-20'>Register</Button>
      </form>
    </Form>
    </div>
    )
  }
  
  export default RegisterForm;