import { useEffect, useState } from "react";

export const FetchPostWithUserData = (userId: string | undefined) => {
   const [user, setUserData] = useState<any>({});

   useEffect(() => {
      const fetchUser = async () => {
         try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const userData = await response.json();
            setUserData(userData);
         }
         catch (error) {
            console.error(`Fetching data failed: ${error}`);
         }
      };
      fetchUser();
   }, [userId]);

   return { user };
} 