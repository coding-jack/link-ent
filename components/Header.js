function Header() {
  return (
    <header className="container flex text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto">
        <img src="/JacksonProfile.png" className="h-24 rounded-full mx-auto mb-5" />
        <h1 className="font-bold text-2xl text-green-300">Jackson Kaufman</h1>
        <p>Check out my music work</p>
        <p>at any one of the links below 🤘🏼</p>
        {/* <p className="pt-3">Or take a look at my <a className="text-green-300 hover:text-green-600 duration-200" href="https://jacksonkaufman.com/">web dev site</a> I made 💻</p> */}
      </div>
    </header>
  );
}

export default Header;
