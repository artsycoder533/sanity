import React from "react";
import { client } from "@/utils/configSanity";
import { PortableText } from "@portabletext/react";

interface IPortfolio {
  _id: string;
  title: string;
  description: any;
  _createdAt: string;
}

async function getData() {
  const query = `*[_type == "portfolio"]`;
  const data = await client.fetch(query);
  return data as IPortfolio[];
}

const Portfolio = async () => {
  const data = (await getData()) as IPortfolio[];
  console.log(data);

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item?._id} className="border p-6 w-full rounded-lg">
            <div>
              <span>{item?.title}</span>
            </div>
            <div>
              <span>
                <PortableText value={item?.description} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
