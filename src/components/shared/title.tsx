

interface TitleProps {
    title: string;
    subtitle: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="flex flex-col gap-2 items-center text-center px-4">
      <h3 className="text-gray-400 text-sm sm:text-base">{title}</h3>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{subtitle}</h2>
    </div>
  );
};

export default Title;
