import { EDITOR_TOOLS } from "@/features/editor";
import "@/styles/editorjs-dark-theme.css";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import React, { memo, useEffect, useRef } from "react";

interface EditorProps {
  handleChangeContent: (data: OutputData) => void;
}

export const Editor: React.FC<EditorProps> = memo(({ handleChangeContent }) => {
  document.documentElement.style.setProperty("--inlineSelectionColor", "#000");
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        inlineToolbar: true,
        tools: EDITOR_TOOLS,
        holder: "editor-js-container",
        async onChange(api) {
          const data = await api.saver.save();
          handleChangeContent(data);
        },
      });

      ref.current = editor;

      return () => {
        if (ref.current && ref.current.destroy) {
          ref.current.destroy();
        }
      };
    }
  }, [handleChangeContent]);
  return (
    <>
      <div
        id="editor-js-container"
        className="w-full text-pretty rounded-lg bg-stone-700 p-4 text-justify"
      ></div>
    </>
  );
});
