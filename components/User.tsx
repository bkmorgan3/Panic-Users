const User = ({user}) => {

    return(
        <div className="border-2 border-solid border-white flex justify-evenly">
          {user.name} {user.phone} {user.dogName} {user.wantsPrints}
        </div>
    )
}

export default User