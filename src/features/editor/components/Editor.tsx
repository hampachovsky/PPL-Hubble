import { EDITOR_TOOLS } from "@/features/editor";
import "@/styles/editorjs-dark-theme.css";
import EditorJS from "@editorjs/editorjs";
import React, { memo, useEffect, useRef } from "react";

export const Editor: React.FC = memo(() => {
  document.documentElement.style.setProperty("--inlineSelectionColor", "#000");
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        inlineToolbar: true,
        tools: EDITOR_TOOLS,
        holder: "editor-js-container",
        data: {
          time: new Date().getTime(),
          blocks: [
            {
              type: "header",
              data: {
                text: "This is my awesome editor!",
                level: 1,
              },
            },
            {
              type: "paragraph",
              data: {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo, aliquam blanditiis ipsum natus optio., ",
              },
            },
            {
              type: "paragraph",
              data: {
                text: '<a href="http://localhost:5173/post-editor/new">http://localhost:5173/post-editor/new</a>',
              },
            },
          ],
        },
        async onChange(api) {
          const data = await api.saver.save();
          console.log(data);
        },
      });

      ref.current = editor;

      return () => {
        if (ref.current && ref.current.destroy) {
          ref.current.destroy();
        }
      };
    }
  }, []);
  return (
    <>
      <div
        id="editor-js-container"
        className="w-full rounded-lg bg-stone-700 p-4"
      ></div>
    </>
  );
});
