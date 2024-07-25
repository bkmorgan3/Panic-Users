import User from "./User"
import { UserProps } from "../src/app/types"

const UsersList = ({users}:UserProps[]) => {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

export default UsersList