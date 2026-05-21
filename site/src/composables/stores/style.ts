import { copy } from "@renovamen/utils";
import type { ValidPaperSize, Font } from "~/composables/constant";

export type ResumeStyles = {
  marginV: number;
  marginH: number;
  lineHeight: number;
  paragraphSpace: number;
  headingSpaceBelow: number;
  themeColor: string;
  fontCJK: Font;
  fontEN: Font;
  fontSize: number;
  paper: ValidPaperSize;
};

const serializeStylesBlock = (s: ResumeStyles) =>
  [
    `styles:`,
    `  paper: ${s.paper}`,
    `  fontSize: ${s.fontSize}`,
    `  themeColor: "${s.themeColor}"`,
    `  fontEN:`,
    `    name: ${s.fontEN.name}`,
    s.fontEN.fontFamily ? `    fontFamily: ${s.fontEN.fontFamily}` : null,
    `  fontCJK:`,
    `    name: ${s.fontCJK.name}`,
    s.fontCJK.fontFamily ? `    fontFamily: ${s.fontCJK.fontFamily}` : null,
    `  marginH: ${s.marginH}`,
    `  marginV: ${s.marginV}`,
    `  lineHeight: ${s.lineHeight}`,
    `  paragraphSpace: ${s.paragraphSpace}`,
    `  headingSpaceBelow: ${s.headingSpaceBelow}`
  ]
    .filter((line) => line !== null)
    .join("\n");

export const syncStylesToMarkdown = (markdown: string, s: ResumeStyles) =>
  markdown.replace(/^(---\r?\n)([\s\S]*?)(\r?\n---)/,  (_, open, body, close) => {
    const stripped = body.replace(/\r?\nstyles:(?:\r?\n[ \t]+[^\r\n]*)*/g, "").trimEnd();
    return `${open}${stripped}\n${serializeStylesBlock(s)}${close}`;
  });

export const useStyleStore = defineStore("style", () => {
  const { DEFAULT } = useConstant();
  const styles = reactive<ResumeStyles>(copy(DEFAULT.STYLES));

  const setStyle = async <T extends keyof ResumeStyles>(
    key: T,
    value: ResumeStyles[T]
  ) => {
    // handle Google fonts
    if (["fontCJK", "fontEN"].includes(key)) {
      await googleFontsService.resolve(value as Font);
    }

    // update styles for the current resume
    styles[key] = value;

    // update CSS
    // vue-smart-pages will handle margins, height and width
    if (!["marginV", "marginH"].includes(key)) dynamicCssService.injectToolbar(styles);

    // sync styles back into the markdown frontmatter so the editor stays current
    const { data, setAndSyncToMonaco } = useDataStore();
    if (data.markdown) {
      setAndSyncToMonaco("markdown", syncStylesToMarkdown(data.markdown, styles));
    }
  };

  return {
    styles,
    setStyle
  };
});
