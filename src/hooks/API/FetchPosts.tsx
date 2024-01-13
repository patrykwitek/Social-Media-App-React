import { useEffect, useState } from "react";
import { PostType } from "../../types/PostType";

export const FetchPosts = () => {
   const [postsApi, setPostsApi] = useState<PostType[]>([]);

   const randomPost = (array: PostType[]) => {
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
   };

   const displayedPostCount: number = 100;

   useEffect(() => {
      const fetchPosts = async () => {
         try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            let postsData = await response.json();
            postsData = randomPost(postsData);
            setPostsApi(postsData.slice(0, displayedPostCount));
         }
         catch (error) {
            console.error(`Fetching data failed: ${error}`)
         }
      };

      fetchPosts();
   }, []);

   return { postsApi };
}
