import {
  all,
  createLowlight,
} from 'lowlight';

import { withProps } from '@udecode/cn';
import {
  BaseParagraphPlugin,
  createSlateEditor,
  Editor,
  serializeHtml,
  SlateLeaf,
} from '@udecode/plate';
import { BaseAlignPlugin } from '@udecode/plate-alignment';
import {
  BaseBoldPlugin,
  BaseCodePlugin,
  BaseItalicPlugin,
  BaseStrikethroughPlugin,
  BaseSubscriptPlugin,
  BaseSuperscriptPlugin,
  BaseUnderlinePlugin,
} from '@udecode/plate-basic-marks';
import { BaseBlockquotePlugin } from '@udecode/plate-block-quote';
import {
  BaseCodeBlockPlugin,
  BaseCodeLinePlugin,
  BaseCodeSyntaxPlugin,
} from '@udecode/plate-code-block';
import { BaseCommentsPlugin } from '@udecode/plate-comments';
import { BaseDatePlugin } from '@udecode/plate-date';
import {
  BaseFontBackgroundColorPlugin,
  BaseFontColorPlugin,
  BaseFontSizePlugin,
} from '@udecode/plate-font';
import {
  BaseHeadingPlugin,
  BaseTocPlugin,
  HEADING_KEYS,
  HEADING_LEVELS,
} from '@udecode/plate-heading';
import { BaseHighlightPlugin } from '@udecode/plate-highlight';
import { BaseHorizontalRulePlugin } from '@udecode/plate-horizontal-rule';
import { BaseIndentPlugin } from '@udecode/plate-indent';
import { BaseIndentListPlugin } from '@udecode/plate-indent-list';
import { BaseKbdPlugin } from '@udecode/plate-kbd';
import {
  BaseColumnItemPlugin,
  BaseColumnPlugin,
} from '@udecode/plate-layout';
import { BaseLineHeightPlugin } from '@udecode/plate-line-height';
import { BaseLinkPlugin } from '@udecode/plate-link';
import { MarkdownPlugin } from '@udecode/plate-markdown';
import {
  BaseEquationPlugin,
  BaseInlineEquationPlugin,
} from '@udecode/plate-math';
import {
  BaseAudioPlugin,
  BaseFilePlugin,
  BaseImagePlugin,
  BaseMediaEmbedPlugin,
  BaseVideoPlugin,
} from '@udecode/plate-media';
import { BaseMentionPlugin } from '@udecode/plate-mention';
import {
  BaseTableCellHeaderPlugin,
  BaseTableCellPlugin,
  BaseTablePlugin,
  BaseTableRowPlugin,
} from '@udecode/plate-table';
import { BaseTogglePlugin } from '@udecode/plate-toggle';
import { useEditorRef } from '@udecode/plate/react';

import {
  BlockquoteElementStatic,
} from '../components/ui/blockquote-element-static';
import {
  CodeBlockElementStatic,
} from '../components/ui/code-block-element-static';
import { CodeLeafStatic } from '../components/ui/code-leaf-static';
import {
  CodeLineElementStatic,
} from '../components/ui/code-line-element-static';
import { CodeSyntaxLeafStatic } from '../components/ui/code-syntax-leaf-static';
import { ColumnElementStatic } from '../components/ui/column-element-static';
import {
  ColumnGroupElementStatic,
} from '../components/ui/column-group-element-static';
import { CommentLeafStatic } from '../components/ui/comment-leaf-static';
import { DateElementStatic } from '../components/ui/date-element-static';
import {
  EditorStatic,
} from '../components/ui/editor-static'; // Assuming this is the correct path
import {
  EquationElementStatic,
} from '../components/ui/equation-element-static';
import { HeadingElementStatic } from '../components/ui/heading-element-static';
import { HighlightLeafStatic } from '../components/ui/highlight-leaf-static';
import { HrElementStatic } from '../components/ui/hr-element-static';
import { ImageElementStatic } from '../components/ui/image-element-static';
import {
  FireLiComponent,
  FireMarker,
} from '../components/ui/indent-fire-marker';
import {
  TodoLiStatic,
  TodoMarkerStatic,
} from '../components/ui/indent-todo-marker-static';
import {
  InlineEquationElementStatic,
} from '../components/ui/inline-equation-element-static';
import { KbdLeafStatic } from '../components/ui/kbd-leaf-static';
import { LinkElementStatic } from '../components/ui/link-element-static';
import {
  MediaAudioElementStatic,
} from '../components/ui/media-audio-element-static';
import {
  MediaFileElementStatic,
} from '../components/ui/media-file-element-static';
import {
  MediaVideoElementStatic,
} from '../components/ui/media-video-element-static';
import { MentionElementStatic } from '../components/ui/mention-element-static';
import {
  ParagraphElementStatic,
} from '../components/ui/paragraph-element-static';
import {
  TableCellElementStatic,
  TableCellHeaderStaticElement,
} from '../components/ui/table-cell-element-static';
import { TableElementStatic } from '../components/ui/table-element-static';
import {
  TableRowElementStatic,
} from '../components/ui/table-row-element-static';
import { TocElementStatic } from '../components/ui/toc-element-static';
import { ToggleElementStatic } from '../components/ui/toggle-element-static';

const siteUrl = process.env.WEBSITE_URL || 'https://platejs.org'; // Consider making this configurable or an env variable
export const lowlight = createLowlight(all);

export const getCanvas = async (editor: Editor) => {
  const { default: html2canvas } = await import('html2canvas-pro');

  const editorNode = editor.api.toDOMNode(editor);
  if (!editorNode) {
    throw new Error("Editor DOM node not found");
  }

  // Clone the editor node to apply styles without affecting the original
  const clonedEditorNode = editorNode.cloneNode(true) as HTMLElement;
  // Append to a hidden div to ensure styles are computed
  const hiddenContainer = document.createElement('div');
  hiddenContainer.style.position = 'absolute';
  hiddenContainer.style.left = '-9999px';
  hiddenContainer.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'; // Apply default font
  document.body.appendChild(hiddenContainer);
  hiddenContainer.appendChild(clonedEditorNode);


  // Apply font styles directly to all elements within the cloned editor
  // This is a more robust way to ensure font consistency for html2canvas
  clonedEditorNode.style.fontFamily = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  Array.from(clonedEditorNode.querySelectorAll('*')).forEach((element) => {
    if (element instanceof HTMLElement) {
      element.style.fontFamily = 'inherit'; // Inherit from parent or the main cloned node
    }
  });


  const canvas = await html2canvas(clonedEditorNode, {
    logging: false, // Disable logging for cleaner console
    useCORS: true, // Important for external images
    scale: 2, // Increase scale for better resolution
    backgroundColor: null, // Use transparent background
    onclone: (documentClone) => {
        // Additional fine-tuning during cloning if necessary
        const clonedContentEditable = documentClone.querySelector('[contenteditable="true"]');
        if (clonedContentEditable) {
            // Example: Ensure all text elements use a consistent font
             Array.from(clonedContentEditable.querySelectorAll('*')).forEach((el) => {
                if (el instanceof HTMLElement) {
                    el.style.fontFamily = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important';
                }
            });
        }
    }
  });

  document.body.removeChild(hiddenContainer); // Clean up the hidden container
  return canvas;
};

export const downloadFile = async (url: string, filename: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const blobUrl = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(blobUrl);
};

export const useExporter = () => {
  const editor = useEditorRef();
  if (!editor) {
    // Return dummy functions or throw an error if editor is not available
    // This helps prevent runtime errors if the hook is used before editor is ready
    const noOp = async () => { console.warn("Editor not available for export."); };
    return {
      exportToHtml: noOp,
      exportToPdf: noOp,
      exportToImage: noOp,
      exportToMarkdown: noOp,
    };
  }

  const exportToPdf = async () => {
    const canvas = await getCanvas(editor);
    const PDFLib = await import('pdf-lib');
    const pdfDoc = await PDFLib.PDFDocument.create();
    const page = pdfDoc.addPage([canvas.width, canvas.height]);
    const imageEmbed = await pdfDoc.embedPng(canvas.toDataURL('image/png'));
    const { height, width } = imageEmbed.scale(1);
    page.drawImage(imageEmbed, {
      height,
      width,
      x: 0,
      y: 0,
    });
    const pdfBase64 = await pdfDoc.saveAsBase64({ dataUri: true });
    await downloadFile(pdfBase64, 'pdf-export.pdf');
  };

  const exportToImage = async () => {
    const canvas = await getCanvas(editor);
    await downloadFile(canvas.toDataURL('image/png'), 'image-export.png');
  };

  const htmlConverter = async () => {
    const components = {
      [BaseAudioPlugin.key]: MediaAudioElementStatic,
      [BaseBlockquotePlugin.key]: BlockquoteElementStatic,
      [BaseBoldPlugin.key]: withProps(SlateLeaf, { as: 'strong' }),
      [BaseCodeBlockPlugin.key]: CodeBlockElementStatic,
      [BaseCodeLinePlugin.key]: CodeLineElementStatic,
      [BaseCodePlugin.key]: CodeLeafStatic,
      [BaseCodeSyntaxPlugin.key]: CodeSyntaxLeafStatic,
      [BaseColumnItemPlugin.key]: ColumnElementStatic,
      [BaseColumnPlugin.key]: ColumnGroupElementStatic,
      [BaseCommentsPlugin.key]: CommentLeafStatic,
      [BaseDatePlugin.key]: DateElementStatic,
      [BaseEquationPlugin.key]: EquationElementStatic,
      [BaseFilePlugin.key]: MediaFileElementStatic,
      [BaseHighlightPlugin.key]: HighlightLeafStatic,
      [BaseHorizontalRulePlugin.key]: HrElementStatic,
      [BaseImagePlugin.key]: ImageElementStatic,
      [BaseInlineEquationPlugin.key]: InlineEquationElementStatic,
      [BaseItalicPlugin.key]: withProps(SlateLeaf, { as: 'em' }),
      [BaseKbdPlugin.key]: KbdLeafStatic,
      [BaseLinkPlugin.key]: LinkElementStatic,
      // [BaseMediaEmbedPlugin.key]: MediaEmbedElementStatic, // Assuming you have this component
      [BaseMentionPlugin.key]: MentionElementStatic,
      [BaseParagraphPlugin.key]: ParagraphElementStatic,
      [BaseStrikethroughPlugin.key]: withProps(SlateLeaf, { as: 'del' }),
      [BaseSubscriptPlugin.key]: withProps(SlateLeaf, { as: 'sub' }),
      [BaseSuperscriptPlugin.key]: withProps(SlateLeaf, { as: 'sup' }),
      [BaseTableCellHeaderPlugin.key]: TableCellHeaderStaticElement,
      [BaseTableCellPlugin.key]: TableCellElementStatic,
      [BaseTablePlugin.key]: TableElementStatic,
      [BaseTableRowPlugin.key]: TableRowElementStatic,
      [BaseTocPlugin.key]: TocElementStatic,
      [BaseTogglePlugin.key]: ToggleElementStatic,
      [BaseUnderlinePlugin.key]: withProps(SlateLeaf, { as: 'u' }),
      [BaseVideoPlugin.key]: MediaVideoElementStatic,
      [HEADING_KEYS.h1]: withProps(HeadingElementStatic, { variant: 'h1' }),
      [HEADING_KEYS.h2]: withProps(HeadingElementStatic, { variant: 'h2' }),
      [HEADING_KEYS.h3]: withProps(HeadingElementStatic, { variant: 'h3' }),
      [HEADING_KEYS.h4]: withProps(HeadingElementStatic, { variant: 'h4' }),
      [HEADING_KEYS.h5]: withProps(HeadingElementStatic, { variant: 'h5' }),
      [HEADING_KEYS.h6]: withProps(HeadingElementStatic, { variant: 'h6' }),
    };

    const editorStatic = createSlateEditor({
      plugins: [
        BaseColumnPlugin,
        BaseColumnItemPlugin,
        BaseTocPlugin,
        BaseVideoPlugin,
        BaseAudioPlugin,
        BaseParagraphPlugin,
        BaseHeadingPlugin,
        BaseMediaEmbedPlugin,
        BaseBoldPlugin,
        BaseCodePlugin,
        BaseItalicPlugin,
        BaseStrikethroughPlugin,
        BaseSubscriptPlugin,
        BaseSuperscriptPlugin,
        BaseUnderlinePlugin,
        BaseBlockquotePlugin,
        BaseDatePlugin,
        BaseEquationPlugin,
        BaseInlineEquationPlugin,
        BaseCodeBlockPlugin.configure({ options: { lowlight } }),
        BaseIndentPlugin.extend({
          inject: {
            targetPlugins: [
              BaseParagraphPlugin.key,
              BaseBlockquotePlugin.key,
              BaseCodeBlockPlugin.key,
            ],
          },
        }),
        BaseIndentListPlugin.extend({
          inject: {
            targetPlugins: [
              BaseParagraphPlugin.key,
              ...HEADING_LEVELS,
              BaseBlockquotePlugin.key,
              BaseCodeBlockPlugin.key,
              BaseTogglePlugin.key,
            ],
          },
          options: {
            listStyleTypes: {
              fire: { liComponent: FireLiComponent, markerComponent: FireMarker, type: 'fire' },
              todo: { liComponent: TodoLiStatic, markerComponent: TodoMarkerStatic, type: 'todo' },
            },
          },
        }),
        BaseLinkPlugin,
        BaseTableRowPlugin,
        BaseTablePlugin,
        BaseTableCellPlugin,
        BaseHorizontalRulePlugin,
        BaseFontColorPlugin,
        BaseFontBackgroundColorPlugin,
        BaseFontSizePlugin,
        BaseKbdPlugin,
        BaseAlignPlugin.extend({
          inject: {
            targetPlugins: [
              BaseParagraphPlugin.key,
              BaseMediaEmbedPlugin.key,
              ...HEADING_LEVELS,
              BaseImagePlugin.key,
            ],
          },
        }),
        BaseLineHeightPlugin,
        BaseHighlightPlugin,
        BaseFilePlugin,
        BaseImagePlugin,
        BaseMentionPlugin,
        BaseCommentsPlugin,
        BaseTogglePlugin,
      ],
      value: editor.children,
    });

    const editorHtml = await serializeHtml(editorStatic, {
      components,
      editorComponent: EditorStatic,
      props: { style: { padding: '0 calc(50% - 350px)', paddingBottom: '' } }, // Consider making this configurable
    });

    const tailwindCss = `<link rel="stylesheet" href="${siteUrl}/tailwind.css">`; // Ensure this path is correct and accessible
    const katexCss = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.18/dist/katex.css" integrity="sha384-9PvLvaiSKCPkFKB1ZsEoTjgnJn+O3KvEwtsz37/XrkYft3DTk2gHdYvd9oWgW3tV" crossorigin="anonymous">`;

    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=JetBrains+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />
        ${tailwindCss}
        ${katexCss}
        <style>
          :root {
            --font-sans: 'Inter', 'Inter Fallback', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            --font-mono: 'JetBrains Mono', 'JetBrains Mono Fallback', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          }
          body { font-family: var(--font-sans); }
        </style>
      </head>
      <body>
        ${editorHtml}
      </body>
    </html>`;

    const url = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
    return { html, url };
  }

  const exportToHtml = async (type: "copy" | "download") => {
    const { html, url } = await htmlConverter();

    if (type === "copy") {
      await navigator.clipboard.writeText(html); // Copy the full HTML content

    } else if (type === "download") {
      await downloadFile(url, 'html-export.html');
    }
  };

  const exportToMarkdown = async (type: "download" | "copy") => {
    const md = editor.getApi(MarkdownPlugin).markdown.serialize();
    
    if (type === "copy") {
      await navigator.clipboard.writeText(md);
    } else if (type === "download") {
      const url = `data:text/markdown;charset=utf-8,${encodeURIComponent(md)}`;
      await downloadFile(url, 'markdown-export.md');
    }
  };

  const exportToGet = async (type: "html" | "markdown" | "pdf" | "image") => {
    switch (type) {
      case "html":
        const { html, url:urlHtml } = await htmlConverter();
        return { html, urlHtml };
      case "markdown":
        const md = editor.getApi(MarkdownPlugin).markdown.serialize();
      const urlMarkdown = `data:text/markdown;charset=utf-8,${encodeURIComponent(md)}`;

        return { md, urlMarkdown };
      case "pdf":
        const canvasPdf = await getCanvas(editor);
        const PDFLib = await import('pdf-lib');
        const pdfDoc = await PDFLib.PDFDocument.create();
        const page = pdfDoc.addPage([canvasPdf.width, canvasPdf.height]);
        const imageEmbed = await pdfDoc.embedPng(canvasPdf.toDataURL('image/png'));
        const { height, width } = imageEmbed.scale(1);
        page.drawImage(imageEmbed, {
          height,
          width,
          x: 0,
          y: 0,
        });
        const pdfBase64 = await pdfDoc.saveAsBase64({ dataUri: true });

        return { canvasPdf, pdfBase64 };
      case "image":
        const canvas = await getCanvas(editor);
        const urlImage = canvas.toDataURL('image/png');
        return {canvas, urlImage};
      default:
        throw new Error(`Unsupported export type: ${type}`);
    }
  }
  return {
    exportToHtml,
    exportToPdf,
    exportToImage,
    exportToMarkdown,
    exportToGet,
  };
};
