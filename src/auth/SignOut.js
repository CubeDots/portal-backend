
import { useSignOut } from 'react-auth-kit'

const SignOut = () => {
    const signOut = useSignOut()

    return (
      <button onClick={() => signOut()}>Sign Out</button>
    )
}

export default SignOut;