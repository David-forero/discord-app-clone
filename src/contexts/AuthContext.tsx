import { Auth } from 'aws-amplify';
import {createContext, useContext, useEffect, useState} from 'react';

const AuthContext = createContext({
    userId: "",
    setUserId: (newId: string) => {}
});

const AuthContextComponent = ({children, client}) =>{
    const [userId, setUserId] = useState(null);

    const connectStreamChatUser = async () => {
        const userData = await Auth.currentAuthenticatedUser();
        const {sub, email} = userData.attributes.sub;

        // console.warn(sub);
        


        await client.connectUser(
            {
              id: "david-forero",
              name: "David",
              image:
                "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
            },
            client.devToken("david-forero")
          );
      
          const channel = client.channel("livestream", "public", { name: "Public" });
          await channel.watch();
      
        //   setUserId(username);
    }

    useEffect(() => {
      
        connectStreamChatUser();
    
    }, [])
    

    return (
        <AuthContext.Provider value={{userId, setUserId}}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContextComponent;

export const useAuthContext = () => useContext(AuthContext)  