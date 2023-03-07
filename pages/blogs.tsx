import BlogCard from "@/components/BlogCard";
import { NextPage } from "next";

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      <BlogCard
        title="This is my blog"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium consectetur dolore earum soluta ratione, natus iste id delectus quae commodi nisi aspernatur animi ad. Iste dolor earum atque? Quibusdam?"
      />
      <BlogCard
        title="This is my blog"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium consectetur dolore earum soluta ratione, natus iste id delectus quae commodi nisi aspernatur animi ad. Iste dolor earum atque? Quibusdam?"
      />
      <BlogCard
        title="This is my blog"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium consectetur dolore earum soluta ratione, natus iste id delectus quae commodi nisi aspernatur animi ad. Iste dolor earum atque? Quibusdam?"
      />
    </div>
  );
};

export default Blogs;
