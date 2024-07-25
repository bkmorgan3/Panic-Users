import { UserProps } from "../src/app/types"

const User = ({user}:UserProps) => {

    return(
        <div  className="border-2 border-solid border-white flex justify-evenly">
          {user.name} {user.phone} {user.dogName} {user.wantsPrints}
        </div>
    )
}

export default User