import {prisma} from '../../../../lib/prisma'
import { columns } from '@/app/columns'
import { DataTable } from '@/components/ui/data-table'

const getData = async () => {
    const users = await prisma.user.findMany({})
    return users
}

const UsersPage = async () => {
    const users = await getData()
    return (
        <main className="flex justify-center">
            <DataTable columns={columns} data={users} />
        </main>
    )
}

export default UsersPage