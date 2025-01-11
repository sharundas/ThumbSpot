import { Button } from "@/components/ui/button"

export default async function Pricing() {
  const isSubscribed = false
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">Subscription Plan</h1>
      <div className="space-y-4 rounded-lg border text-card-foreground shadow-sm p-6 mb-6">
         <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight ">
          Full Access
         </h2>
         <p className="leading-7">Aceess to all Feature</p>
         <p className="text-2xl font-bold">$9.99/month</p>
         {isSubscribed ? (
          <form className="">
            <Button type="submit">Manage Subscription</Button>
          </form>
         ):(
          <form className="">
            <Button type="submit">
             Subscriber
            </Button>
          </form>
         )}
      </div>
    </div>
  )
}

