const Card = () => {
  return (
    <div className="h-full bg-white rounded-3xl opacity-40 hover:opacity-90">
      <div className="rounded-t-3xl bg-blue-500">
        <h1 className="p-3">Example Card</h1>
      </div>
      <div className="bg-yellow-200 w-full h-full rounded-b-3xl">
        <ul className="p-3">
          <li>example 1</li>
          <li>example 2</li>
          <li>example 3</li>
        </ul>
      </div>
    </div>
  );
};

const Aside = () => {
  return (
    <aside className="fixed top-1/4 right-64 h-96 w-72 m-3">
      <Card />
    </aside>
  );
};

export default Aside;
