const Lesson09 = () => {
  const doSomething = (e) => {
    e.preventDefault();
    console.log("hi");
  };

  return (
    <>
      <form action="" onSubmit={doSomething}>
        <input type="text" />
        <button>Search</button>
      </form>
    </>
  );
};

export default Lesson09;
