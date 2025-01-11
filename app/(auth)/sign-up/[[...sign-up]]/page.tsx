import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page() {
  return(
    <div className="mt-24 flex items-center justify-between flex-col space-y-8 pb-20">
      <div className="text-center mt-">
        <h2 className="text-3xl font-bold text-foreground">
          Create an Account
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Sign up to get started
        </p>

      </div>
       <SignUp 
       appearance={{
        elements:{
          card: "bg-card border border-border shadow-lg rounded-xl p-6",
          headerTitle: "hidden",
          headerSubtitle: "text-muted-foreground",
          socialButtonsBlockButton__google:"bg-white hover:bg-white/60",  
          dividerText: "text-muted-foreground",
          dividerLine: "bg-border",
          formFieldLabel:"text-foreground",    
         footer: "hidden"
        }
       }}
       forceRedirectUrl="/dashboard"
        />
        <p className=" text-lg text-muted-foreground">
          Already have an account?
          <Link className='underline' href=
          "/sign-in">Sign in</Link>
        </p>
    </div>
    
  )
}