import Button from './Button';

function Section({ title, subtitle, dark = false, bgImage }) {
  const sectionStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  return (
    <section
      className={`relative text-center py-[500px] px-4 ${dark ? 'text-white' : 'text-black'}`}
      style={sectionStyle}
    >
      {dark && <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>}

      <div className="relative z-10">
        <h2 className="text-4xl font-semibold mb-3 drop-shadow">{title}</h2>
        <p className="text-lg mb-5 drop-shadow">{subtitle}</p>
        <div className="flex justify-center gap-6">
          <Button text="Learn more" variant={dark ? 'outline' : 'primary'} />
          <Button text="Buy" variant="secondary" />
        </div>
      </div>
    </section>
  );
}

export default Section;