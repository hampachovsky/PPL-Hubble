import Code from "@editorjs/code";
import Header from "@editorjs/header";
import EditorjsList from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Underline from "@editorjs/underline";
import ChangeCase from "editorjs-change-case";
import ColorPicker from "editorjs-color-picker";

export const EDITOR_TOOLS = {
  code: Code,
  header: Header,
  underline: Underline,
  paragraph: { class: Paragraph, inlineToolbar: true },
  image: {
    class: SimpleImage,
  },
  list: {
    class: EditorjsList,
    inlineToolbar: true,
    config: {
      defaultStyle: "unordered",
    },
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: "CTRL+Q",
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },
  ColorPicker: {
    class: ColorPicker,
  },
  changeCase: {
    class: ChangeCase,
  },

  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
      maxRows: 5,
      maxCols: 5,
    },
  },
};
