import { Banner } from "@/components";
import React from "react";
import { PostCardFooter, PostCardHeader } from "../PostCard";
import { PostContent } from "./PostContent";

const mockPost = {
  time: 1550476186479,
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
    {
      id: "oUq2g_tl8y",
      type: "header",
      data: {
        text: "Editor.js",
        level: 2,
      },
    },

    {
      id: "zbGZFPM-iI",
      type: "paragraph",
      data: {
        text: `Lorem<span style="color: rgb(31, 106, 131);"> </span><span style="color: rgb(30, 122, 253);">ipsum </span><u class="cdx-underline"><span style="color: rgb(30, 122, 253);"></span>dolor </u>sit <i>amet </i><b>consectetur </b><i><span style="color: rgb(229, 105, 16);"><u class="cdx-underline"><span style="color: rgb(174, 46, 36);"><span style="color: rgb(94, 77, 178);"><span style="color: rgb(130, 112, 219);">aDIPISICING </span></span></span></u></span></i>elit. Culpa quo, aliquam blanditiis ipsum natus optio.`,
      },
    },
    {
      id: "qYIGsjS5rt",
      type: "header",
      data: {
        text: "Key features",
        level: 3,
      },
    },
    {
      id: "XV87kJS_H1",
      type: "list",
      data: {
        style: "unordered",
        items: [
          "It is a block-styled editor",
          "It returns clean data output in JSON",
          "Designed to be extendable and pluggable with a simple API",
        ],
      },
    },
    {
      type: "list",
      data: {
        style: "ordered",
        items: [
          {
            content: "Apples",
            meta: {
              checked: false,
            },
            items: [
              {
                content: "Red",
                meta: {
                  checked: true,
                },
                items: [],
              },
              {
                content: "Next",
                meta: {
                  checked: true,
                },
                items: [],
              },
            ],
          },
          {
            content: "tewxt",
            meta: {
              checked: false,
            },
            items: [
              {
                content: "hw",
                meta: {
                  checked: true,
                },
                items: [],
              },
              {
                content: "qq",
                meta: {
                  checked: true,
                },
                items: [],
              },
            ],
          },
        ],
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        meta: {
          start: 2,
          counterType: "upper-roman",
        },
        items: [
          {
            content: "Apples",
            meta: {},
            items: [],
          },
          { content: "Red", meta: {}, items: [] },
        ],
      },
    },
    {
      id: "AOulAjL8XM",
      type: "header",
      data: {
        text: "What does it mean «block-styled editor»",
        level: 3,
      },
    },
    {
      id: "cyZjplMOZ0",
      type: "paragraph",
      data: {
        text: "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core.",
      },
    },
    {
      type: "paragraph",
      data: {
        text: '<span style="color: rgb(30, 122, 253);"><a href="http://localhost:5173/post-editor/new">http://localhost:5173/post-editor/new</a></span>',
      },
    },
    {
      type: "table",
      data: {
        withHeadings: true,
        stretched: false,
        content: [
          ["Kine", "Pigs", "Chicken", "Meme", "smth"],
          ["1 pcs", "3 pcs", "12 pcs", "1pcs  ", "33pcs"],
          ["100$", "200$", "150$", "100$", "200$"],
        ],
      },
    },
    {
      type: "image",
      data: {
        caption: "",
        url: "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
      },
    },
  ],
  version: "2.8.1",
};

export const Post: React.FC = () => {
  return (
    <div className="w-3/4 rounded-md border border-gray-700 bg-stone-700 shadow">
      <div className="p-4">
        <PostCardHeader marginBottom="none" />
      </div>
      <div className="mb-2">
        <Banner imageURL="https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>
      <div className="p-4">
        <PostContent data={mockPost} />
        <div className="mt-4 border-t border-gray-500">
          <PostCardFooter />
        </div>
      </div>
    </div>
  );
};
