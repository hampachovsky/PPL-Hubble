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
            {
              type: "paragraph",
              data: {
                text: `      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque alias  similique cum tenetur facere neque, quia numquam ipsa dolorem necessitatibus eum aperiam, enim expedita suscipit excepturi obcaecati quod distinctio dolores earum fugiat magni? Odit, asperiores nostrum necessitatibus cumque molestiae similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ea, numquam aperiam omnis expedita dolore enim eveniet dignissimos libero minus, eligendi officia similique? Eum, vero aut ipsa quidem non sapiente minima dolores ex velit nisi incidunt voluptas illum nemo laborum magni aperiam quam. Error tempora atque sapiente omnis! Minima harum inventore maiores beatae adipisci repudiandae necessitatibus soluta illo atque totam.`,
              },
            },

            {
              type: "paragraph",
              data: {
                text: '<a href="http://localhost:5173/post-editor/new">http://localhost:5173/post-editor/new</a>',
              },
            },
            {
              type: "code",
              data: {
                code: `     async onChange(api) {
                                const data = await api.saver.save();
                                console.log(data);
                              },
                            });

                            ref.current = editor;

                            return () => {
                              if (ref.current && ref.current.destroy) {
                                ref.current.destroy();
                              }
                            };`,
              },
            },
            {
              type: "image",
              data: {
                caption: "bear image",
                url: "https://placebear.com/600/600",
              },
            },
            {
              type: "image",
              data: {
                url: "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
              },
            },
          ],
        },
        async onChange(api) {
          const data = await api.saver.save();
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
        className="w-full text-pretty rounded-lg bg-stone-700 p-4 text-justify"
      ></div>
    </>
  );
});
