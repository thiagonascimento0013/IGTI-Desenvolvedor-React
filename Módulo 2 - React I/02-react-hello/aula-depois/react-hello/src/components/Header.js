export default function Header({children, size}) {
  console.log(size);

  let fontSize = 'text-xl';

  if (size === 'large') {
    fontSize = 'text-3xl';
  }

  return (
    <header>
      <div className="bg-green-300 mx-auto p-4">
        <h1 className={`text-center front-semibold ${fontSize}`}>
          {children}
        </h1>
      </div>
    </header>
  );
}