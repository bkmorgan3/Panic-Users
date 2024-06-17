import {prisma} from '../../../../lib/prisma'
import UsersList from '../../../../components/UsersList'

const getData = async () => {
    const users = await prisma.user.findMany({})
    return users
}

const UsersPage = async () => {
    const users = await getData()
    return <div><UsersList users={users} /></div>
}

export default UsersPage