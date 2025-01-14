import DashboardNavbar from "@/components/DashboardNav";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { dashboardContent } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <section className="container mx-auto pb-12">
        <div>
          <h1 className="text-4xl font-bold mt-6 mb-">Welcome Back, 👋</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
          {dashboardContent.map((card) => (
            <Link
              href={`${card.href}`}
              key={card.title}
              className="rounded-xl overflow-hidden cardLink"
            >
              <Card>
                <CardHeader className="p-1 overflow-hidden bg-white">
                  <Image
                    className="w-full h-full object-cover rounded-t-lg"
                    width={280}
                    height={30}
                    src={card.thumbnail}
                    alt={card.title}
                  />
                </CardHeader>

                <CardContent className="px-4 pt-4">
                  <h2 className="cardTitle text-xl font-semibold h-12">
                    {card.title}
                  </h2>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
