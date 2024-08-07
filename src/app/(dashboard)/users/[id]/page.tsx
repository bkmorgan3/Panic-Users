import ImageForm from "@/components/ui/ImageForm"
import { prisma } from "../../../../../lib/prisma"


const getOneUser = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
    return user
}

export default async function UserPage({params}) {
   const user = await getOneUser(params.id)
   
   function formatPhoneNumber(phoneNumber) {
    let cleaned = ('' + phoneNumber).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if( match) {
        return '(' + match[1] + ')' + match[2] + '-' + match [3]
    }
   }
 
    return(
        <div  className="h-screen bg-stone-50 pt-4">
           <h1 className="text-center text-2xl">User Info</h1> 
            <div className="mx-auto mt-16 max-w-lg h-96 shadow-md rounded-md bg-slate-50">
             <h2 className="text-center">{user.name}</h2>
                <p className="text-center">{user.email}</p>
             <p className="text-center">{formatPhoneNumber(user?.phone)}</p>
                <p className="text-center">Wants Prints? {user?.wantsPrints}</p>
             <p className="text-center">{user?.dogName} is a {user?.breedAndColor}</p>

                <section className="mx-auto mt-8 flex flex-col items-center content-center">
                    <p>Upload photos here--- COMING SOON</p>
                    <ImageForm />
                </section>
          </div>
        </div>
    )
}