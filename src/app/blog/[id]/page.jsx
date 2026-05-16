import React from "react";
import { Suspense } from "react";
import BlogPost from "./BlogPost";

const Page = async ({params}) => {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPost params={params} />
    </Suspense>
    </>
  );
};

export default Page;