import {prisma} from '../../../../lib/prisma'
import UsersList from '../../../../components/UsersList'
import { AUser } from '@/app/types'
import { columns } from '@/app/columns'
import { DataTable } from '@/components/ui/data-table'

const getData = async () => {
    const users = await prisma.user.findMany({})
    return users
}

const UsersPage = async () => {
    const users = await getData()
    return (
        <main className="flex">
            <DataTable columns={columns} data={users} />
        </main>
    )
    // return <div style={{border: '1px solid red'}} className="w-screen h-screen bg-black text-white overflow-auto" ><UsersList users={users} /></div>
}

export default UsersPage