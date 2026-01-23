import { UpSlider } from "./animation";

const Title = ({ title }: { title: string }) => {
  return (
    <UpSlider>
      <h2 className="w-full text-4xl font-bold text-center mb-8 md:mb-16 text-slate-800">
        {title}
      </h2>
    </UpSlider>
  );
};

export default Title;
