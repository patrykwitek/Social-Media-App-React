import { useEffect, useState } from "react";

export const FetchPostComments = (postId: number) => {
   const [comments, setComments] = useState<any[]>([]);

   useEffect(() => {
      const fetchPostComments = async () => {
         try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            const commentsData = await response.json();
            setComments(commentsData);
         } catch (error) {
            console.error('Fetching data failed: ', error);
         }
      };

      fetchPostComments();
   }, [postId]);

   return { comments };
}