import { useEffect, useState } from "react";

export const FetchPostsForProfileSection = (userID: string | undefined) => {
   const [postsList, setPostsList] = useState<any[]>([]);

   useEffect(() => {
      const fetchUserPosts = async () => {
         try {
            const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
            const postsData = await postsResponse.json();
            setPostsList(postsData);
         } catch (error) {
            console.error('Fetching data failed: ', error);
         }
      };

      fetchUserPosts();
   }, [userID]);

   return { postsList };
}