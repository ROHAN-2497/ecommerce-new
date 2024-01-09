import PopularProduct from "@/components/HomePage/PopularProduct";
import Categories from "@/components/HomePage/categories";
import { Suspense } from "react";
export const revalidate = 5;
export default function Home() {
  return (
    <main>
      <Categories />
      <Suspense
        fallback={
          <h1 className="text-center font-semibold text-2xl">Loading..</h1>
        }
      >
        <PopularProduct />
      </Suspense>
    </main>
  );
}
