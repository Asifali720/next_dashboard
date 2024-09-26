import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";
import PostTable from "@/components/posts/PostTable";


export default function PostsPage() {
  return <>
    <BackButton title="Go Back" link="/"/>
    <PostTable/>
    <PostPagination/>
  </>
}