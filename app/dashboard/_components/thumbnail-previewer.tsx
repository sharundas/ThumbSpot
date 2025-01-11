"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Laptop, Tablets, Smartphone, Tablet } from "lucide-react";
import { useTheme } from "next-themes";
import thumbnail1 from "@/assets/thumbnail1.jpg";
import thumbnail2 from "@/assets/thumbnail2.jpg";
import thumbnail3 from "@/assets/thumbnail3.jpg";
import thumbnail4 from "@/assets/thumbnail4.jpg";
import thumbnail5 from "@/assets/thumbnail5.jpg";
import thumbnail7 from "@/assets/thumbnail7.jpg";
import thumbnail8 from "@/assets/thumbnail8.jpg";
import thumbnail9 from "@/assets/thumbnail9.jpg";
import thumbnail10 from "@/assets/thumbnail10.jpg";
import thumbnail11 from "@/assets/thumbnail11.jpg";
import thumbnail12 from "@/assets/thumbnail12.jpg";
import thumbnail13 from "@/assets/thumbnail13.jpg";
import thumbnail15 from "@/assets/thumbnail14.jpg";
import thumbnail14 from "@/assets/thumbnail15.jpg";
import thumbnail17 from "@/assets/thumbnail-17.jpg";

const randomVideos = [
  {
    title:
      "Redmagic 10 Pro | My experience | Best Gaming Phone But?? | Malayalam",
    channel: "CallMeShazzam",
    views: "800K views",
    age: "5 days ago",
    thumbnail: thumbnail15.src,
  },
  {
    title: "2024 Kerala Rewind !!! Arjyou",
    channel: "Arjyou",
    views: "1.5M views",
    age: "2 weeks ago",
    thumbnail: thumbnail7.src,
  },
  {
    title:
      "അമേരിക്ക ഏറ്റവും വലിയ ശക്തിയായി തുടരാനുള്ള കാരണം ? Why America is the most powerful country?",
    channel: "The Mallu Analyst",
    views: "300K views",
    age: "1 month ago",
    thumbnail: thumbnail1.src,
  },
  {
    title: "Crocodile Egg Hatching",
    channel: "M4 Tech",
    views: "800K views",
    age: "5 days ago",
    thumbnail: thumbnail8.src,
  },
  {
    title: "SHAMAM JUICE | Muskmelon Juice Recipe | Healthy Refreshing Drinks",
    channel: "Village Food Channel",
    age: "1.5M views",
    time: "2 weeks ago",
    thumbnail: thumbnail9.src,
  },
  {
    title: "How I become a millionaire as a Software Engineer",
    channel: "Sahil & Sarra",
    age: "300K views",
    time: "1 month ago",
    thumbnail: thumbnail10.src,
  },
  {
    title: "Become a Cybersecurity Expert for FREE! Join Our Challenge",
    channel: "Brototype",
    views: "1.2M views",
    age: "2 days ago",
    thumbnail: thumbnail11.src,
  },
  {
    title: "How to Make SO MUCH Money in 2025 it Feels ILLEGAL ",
    channel: "Iman Gadzhi",
    views: "800K views",
    age: "5 days ago",
    thumbnail: thumbnail4.src,
  },
  {
    title: "How We Make Money on YouTube with 20M Subs",
    channel: "Kurgesagt -In a Nutshell",
    views: "1.5M views",
    age: "2 weeks ago",
    thumbnail: thumbnail5.src,
  },
  {
    title: "How to Make High Quality Videos in 54 min, 19 sec, 20 milliseconds",
    channel: "The Studio",
    views: "300K views",
    age: "1 month ago",
    thumbnail: thumbnail12.src,
  },
  {
    title: "How I Actually Make Viral thumbnails",
    channel: "Isaac",
    views: "800K views",
    age: "5 days ago",
    thumbnail: thumbnail13.src,
  },
  {
    title: "The Untold Truth About Money: How to Build Wealth From Nothing.",
    channel: "James Jani",
    age: "1.5M views",
    time: "2 weeks ago",
    thumbnail: thumbnail14.src,
  },
  {
    title: "If i Started YouTube While Working Full-Time,I'd Do this",
    channel: "Ali Abdaal",
    age: "300K views",
    time: "1 month ago",
    thumbnail: thumbnail3.src,
  },
  {
    title: "7 Days Stranded On a island",
    channel: "James May",
    views: "1.2M views",
    age: "2 days ago",
    thumbnail: thumbnail2.src,
  },
];

interface ThumbnailPreviewer {
  channelNameSaved: string;
}

export default function ThumbnailPreviewer({
  channelNameSaved,
}: {
  channelNameSaved: string;
}) {
  const [title, setTitle] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [channelName, setChannelName] = useState("");
  const [videos, setVideos] = useState([...randomVideos]);
  const [layout, setLayout] = useState("desktop");

  const placeholderImage = thumbnail17.src;

  useEffect(() => {
    setVideos([
      {
        title,
        channel: channelName,
        views: "0",
        age: "just now",
        thumbnail: thumbnailUrl || placeholderImage,
      },
      ...randomVideos,
    ]);
  }, [title, channelName, thumbnailUrl]);

  const randomizeOrder = () => {
    setVideos((prevVideos) => [...prevVideos.sort(() => Math.random() - 0.5)]);
  };
  const getGridClass = () => {
    switch (layout) {
      case "desktop":
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";
      case "tablet":
        return "grid-cols-1 sm:grid-cols-2 max-w-[1100px] mx-auto";
      case "mobile":
        return "grid-cols-1 mx-w-[340px] mx-auto";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    }
  };
  return (
    <div className="relative w-full h-full bg-background text-foreground">
      <div className="grid md:grid-cols-2 gap-6 border-b border-white/20 pb-12">
        {/* input and preview section */}
        <div className="space-y-4">
          <h3 className="">Input</h3>

          <Input
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  setThumbnailUrl(event.target?.result as string);
                };
                reader.readAsDataURL(file);
              }
            }}
          />

          <Input
            placeholder={channelNameSaved || "channel name"}
            value={channelName || channelNameSaved}
            onChange={(e) => setChannelName(e.target.value)}
          />
        </div>
        <div className="">
          <h3 className="text-lg font-medium leading-6 mb-4">
            Thumbnail Preview
          </h3>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden w-[60%] ">
            <img
              src={thumbnailUrl || placeholderImage}
              alt="Thumbnail Preview"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* product section */}
      {/* Randomie order and layout selection */}
      <div className="mb-6 flex items-center space-x-4 max-w-[1200px] ma-auto">
        <Button className="bg-[#c015cc]" onClick={randomizeOrder}>
          Randomize Order
        </Button>
        <div className="flex items-center space-x-2 rounded-full p-1 shadow-sm">
          <Button
            variant={layout === "desktop" ? "default" : "ghost"}
            size="icon"
            onClick={() => setLayout("desktop")}
            aria-label="Desktop layout"
          >
            <Laptop className="w-4 h-4" />
          </Button>
          <Button
            className="hover:bg-purple-500"
            variant={layout === "tablet" ? "default" : `outline`}
            size="icon"
            onClick={() => setLayout("tablet")}
            aria-label="Tablet layout"
          >
            <Tablet className="w-4 h-4" />
          </Button>
          <Button
            variant={layout === "mobile" ? "default" : "ghost"}
            size="icon"
            onClick={() => setLayout("mobile")}
            aria-label="Mobile layout"
          >
            <Smartphone className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {/* Video cards for thumbnail previewing */}
      <div
        className={`grid ${getGridClass()} gap-6 ${
          layout === "mobile" ? "w-full" : ""
        }`}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className={`overflow-hidden shadow-lg rounded-lg ${
              layout === "mobile" ? "max-w-[340px] mx-auto w-full" : ""
            }`}
          >
            <div className="relative pb-[55%]">
              <img
                src={video.thumbnail || placeholderImage}
                alt="video thumbanil"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex  items-start space-x-3">
                <div className="flex-shrink-0">
                  <img
                    src={video.thumbnail || placeholderImage}
                    alt="channel avatar"
                    className="w-9 h-9 rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate font-heading text-black">
                    {video.title}
                  </p>
                  <p className="text-sm text-[#AAAAAA]">
                    {video.channel || channelNameSaved}
                  </p>
                  <p className="text-sm text-[#AAAAAA]">
                    {video.views} views • {video.age}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
