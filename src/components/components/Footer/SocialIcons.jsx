
const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <>
        <a href={icon.link}>
          <img
            key={icon.name}
            className="p-2 cursor-pointer inline-flex items-center
            rounded-full w-16 h-16 duration-300 "
            src={icon.imageSrc}
            alt={icon.name}
          />
        </a>
        </>
      ))}
    </div>
  );
};

export default SocialIcons;
