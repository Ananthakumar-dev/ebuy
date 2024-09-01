import Link from "next/link";

const page = () => {
  return (
    <div className="h-full w-3/4">
      <div className="text-right rounded-lg">
        <Link href="/dashboard/products/add">
          <button className="btn w-48 mr-2">Add Product</button>
        </Link>
      </div>
    </div>
  );
};

export default page;
