import "@/styles/editorjs-parse-fix.css";
import Blocks, { DataProp } from "editorjs-blocks-react-renderer";
import React from "react";

interface PostContent {
  data: DataProp;
}

export const PostContent: React.FC<PostContent> = ({ data }) => {
  return (
    <div id={"post-content-root"}>
      <Blocks
        data={data}
        renderers={{}}
        config={{
          code: {
            className:
              "language-js text-sm my-4 flex items-center flex-wrap text-wrap",
          },
          header: {
            className: "my-4 text-neutral-100 font-semibold ",
          },
          image: {
            className:
              "w-full max-w-screen-md flex justify-center items-center flex-col my-4",
            actionsClassNames: {
              stretched: "w-full h-80 object-cover",
              withBorder: "border border-2",
              withBackground: "p-2",
            },
          },
          ordered: {
            className: "list-decimal list-inside text-black",
          },
          list: {
            className: "list-inside prose text-neutral-200",
          },
          paragraph: {
            className: "text-justify text-lg text-neutral-200 my-2",
            actionsClassNames: {
              alignment: "text-{alignment}",
            },
          },
          quote: {
            className: "py-3 px-5 italic font-serif",
          },
          table: {
            className: "table-auto text-center mx-auto mt-4 post-table",
          },
        }}
      />
    </div>
  );
};
