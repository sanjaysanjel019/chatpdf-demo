import { Button } from "@/components/ui/button"
import { UserButton, auth } from "@clerk/nextjs/app-beta"
import Link from "next/link";
import {LogIn} from "lucide-react";

export default async function Home() {
const {userId} = await auth();
const isAuth = !!userId;

  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100'>
       <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex flex-col items-center text-center'>
            <div className='flex items-center'>
              <h1 className='mr-2 text-4xl font-semibold'>Chat with any PDF</h1>
               <UserButton afterSignOutUrl="/"/>
            </div>

            <div className="flex mt-2">
              {isAuth && <Button> Go to Chats </Button>}
              </div>


              <p className="max-w-xl mt-2 text-lg">Login to thousands of researhcers and professionals wo instantly answewr you questions and research with groundbreaking AI</p>

              <div className="w-full mt-4">
                {isAuth ? (<h1>fileupload</h1>):(
                  <Link href="/sign-in">
                  <Button>Login to Get Started
                    <LogIn className="w-4 h-4 ml-2"></LogIn>
                    </Button> 
                  </Link>
                )}
              
            </div>
          </div>
       </div>
    </div>  
  )
}
