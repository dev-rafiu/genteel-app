import { TextStyle } from "react-native";

// Font Family Constants
export const FontFamily = {
  // Lora fonts (serif - good for headings)
  loraRegular: "Lora-Regular",
  loraMedium: "Lora-Medium",
  loraSemiBold: "Lora-SemiBold",
  loraBold: "Lora-Bold",
  // Nunito fonts (sans-serif - good for body text)
  nunitoLight: "Nunito-Light",
  nunitoRegular: "Nunito-Regular",
  nunitoMedium: "Nunito-Medium",
  nunitoSemiBold: "Nunito-SemiBold",
  nunitoBold: "Nunito-Bold",
  nunitoExtraBold: "Nunito-ExtraBold",
} as const;

// Typography Styles
export const Typography = {
  // Headings (using Lora - serif)
  h1: {
    fontFamily: FontFamily.loraBold,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  } as TextStyle,

  h2: {
    fontFamily: FontFamily.loraBold,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.3,
  } as TextStyle,

  h3: {
    fontFamily: FontFamily.loraSemiBold,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.2,
  } as TextStyle,

  h4: {
    fontFamily: FontFamily.loraSemiBold,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.1,
  } as TextStyle,

  h5: {
    fontFamily: FontFamily.loraMedium,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0,
  } as TextStyle,

  h6: {
    fontFamily: FontFamily.loraMedium,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0,
  } as TextStyle,

  // Body Text (using Nunito - sans-serif)
  bodyLarge: {
    fontFamily: FontFamily.nunitoRegular,
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0.1,
  } as TextStyle,

  bodyMedium: {
    fontFamily: FontFamily.nunitoRegular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1,
  } as TextStyle,

  bodySmall: {
    fontFamily: FontFamily.nunitoRegular,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  } as TextStyle,

  bodyXSmall: {
    fontFamily: FontFamily.nunitoRegular,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.1,
  } as TextStyle,

  // Labels (using Nunito)
  labelLarge: {
    fontFamily: FontFamily.nunitoMedium,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.2,
  } as TextStyle,

  labelMedium: {
    fontFamily: FontFamily.nunitoMedium,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
  } as TextStyle,

  labelSmall: {
    fontFamily: FontFamily.nunitoMedium,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
  } as TextStyle,

  // Buttons (using Nunito)
  buttonLarge: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  } as TextStyle,

  buttonMedium: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.5,
  } as TextStyle,

  buttonSmall: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  } as TextStyle,

  // Caption
  caption: {
    fontFamily: FontFamily.nunitoRegular,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
  } as TextStyle,

  // Overline
  overline: {
    fontFamily: FontFamily.nunitoMedium,
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 1.5,
    textTransform: "uppercase" as const,
  } as TextStyle,
} as const;

// Helper function to create custom text styles
export const createTextStyle = (
  fontFamily: keyof typeof FontFamily,
  fontSize: number,
  lineHeight?: number,
  letterSpacing?: number
): TextStyle => ({
  fontFamily: FontFamily[fontFamily],
  fontSize,
  lineHeight: lineHeight || fontSize * 1.4,
  letterSpacing,
});

