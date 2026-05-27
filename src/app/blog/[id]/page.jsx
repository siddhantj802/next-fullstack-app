import React, {cache} from "react";
import { Suspense } from "react";
import BlogPost from "./BlogPost";
import { notFound } from "next/navigation";

const getData = cache(async(id) =>{
    
  const res = await fetch( `http://localhost:3000/api/posts/${id}`)
  
  if(!res.ok){
     notFound()
  }
  return res.json()
})

export async function generateMetadata({ params }) {
  const {id} = await params
  const post = await getData(id) 
  console.log(id)
  return {
    title: post.title,
    description: post.desc,
  }
}

const Page = async ({params}) => {

  const  {id}  = await params;
  const data = await getData(id);

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPost  data={data}/>
    </Suspense>
    </>
  );
};

export default Page;