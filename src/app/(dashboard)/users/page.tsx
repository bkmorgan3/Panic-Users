import {prisma} from '../../../../lib/prisma'
import UsersList from '../../../../components/UsersList'

const getData = async () => {
    const users = await prisma.user.findMany({})
    console.log('users page', users)
    return users
}

const UsersPage = async () => {
    const users = await getData()
    return <div className="w-screen h-screen bg-black text-white"><UsersList users={users} /></div>
}

export default UsersPage