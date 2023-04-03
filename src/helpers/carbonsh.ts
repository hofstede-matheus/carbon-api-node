export interface Params {
  bg: string;
  t: string;
  wt: string;
  l: string;
  width: number;
  ds: boolean;
  dsyoff: string;
  dsblur: string;
  wc: boolean;
  wa: boolean;
  pv: string;
  ph: string;
  ln: boolean;
  fl: number;
  fm: string;
  fs: string;
  lh: string;
  si: boolean;
  es: string;
  wm: boolean;
  code: string;
}

export function createURLString(params: Params) {
  const {
    bg: backgroundColor,
    t: theme,
    wt: windowControls,
    l: language,
    ds: dropShadow,
    dsyoff: dropShadowOffsetY,
    dsblur: dropShadowBlurRadius,
    wc: autoAdjustWidth,
    wa: widthAdjustment,
    pv: paddingVertical,
    ph: paddingHorizontal,
    ln: lineNumbers,
    es: exportSize,
    wm: watermark,
    code,
  } = params;

  const url = new URL("https://carbon.now.sh");

  url.searchParams.append("bg", backgroundColor);
  url.searchParams.append("t", theme);
  url.searchParams.append("wt", windowControls);
  url.searchParams.append("l", language);
  url.searchParams.append("ds", dropShadow.toString());
  url.searchParams.append("dsyoff", dropShadowOffsetY);
  url.searchParams.append("dsblur", dropShadowBlurRadius);
  url.searchParams.append("wc", autoAdjustWidth.toString());
  url.searchParams.append("wa", widthAdjustment.toString());
  url.searchParams.append("pv", paddingVertical);
  url.searchParams.append("ph", paddingHorizontal);
  url.searchParams.append("ln", lineNumbers.toString());
  url.searchParams.append("es", exportSize);
  url.searchParams.append("wm", watermark.toString());
  url.searchParams.append("code", code);

  return url.href;
}
