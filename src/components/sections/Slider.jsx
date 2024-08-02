export default function Slider() {
  return (
    <>
      <Img src="/react.png" />
      <Img src="/astro.png" />
      <Img src="/blender.png" />
      <Img src="/threejs.png" />
      <Img src="/figma.png" />
      <Img src="/nextjs.png" />
      <Img src="/tailwind.png" />
      <Img src="/framer.png" />
      <Img src="/threejs.png" />
    </>
  );
}

const Img = ({ src }) => {
  return (
    <div className="w-16  h-16  ">
      <img src={src} alt="image" className="h-full w-full object-cover" />
    </div>
  );
};
