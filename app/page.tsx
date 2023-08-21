import ImgVsImage from "@/app/component/imgVsImage/ImgVsImage";
import StaticImage from "./component/staticImage/StaticImage";
import ResponsiveFillImage from "./component/responsive-fill-image/ResponsiveFillImage";
import ResponsiveFixedImage from "./component/responsive-fixed-image/ResponsiveFixedImage";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Next.js-Image component（一） */}
      {/* <ImgVsImage /> */}
      {/* Next.js-Image component（二） */}
      {/* <StaticImage /> */}
      {/* <ResponsiveFillImage /> */}
      <ResponsiveFixedImage />
    </main>
  );
}
