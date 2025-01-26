import { Gasoek_One, Nanum_Brush_Script, Nanum_Gothic } from "next/font/google";

export const gasoekOne = Gasoek_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export const nanumBrushScript = Nanum_Brush_Script({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export const nanumGothic = Nanum_Gothic({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export const fontClasses = {
    logo: nanumBrushScript.className,
    main: gasoekOne.className,
    body: nanumGothic.className,
};
