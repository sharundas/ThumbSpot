import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThumbnailPreviewer from "./_components/thumbnail-previewer";
import { auth } from "@clerk/nextjs/server";

export default async function Dashboard() {
  await auth.protect();
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md">
      <p className="text-3xl mb-6 bg-gradient-to-b from-black to-[#c015cc] text-transparent bg-clip-text">
        Welcome To ThumbSpot
      </p>
      <Button className="bg-gradient-to-b from-black to-[#c015cc] text-transparent bg-clip-text">
        <Link href="/dashboard">Subscribe</Link>
      </Button>

      <div className="">
        <p className="text-xl mb-6">Subscribe For Full Access</p>
        <ThumbnailPreviewer channelNameSaved="YourChannelName" />
      </div>
    </div>
  );
}
