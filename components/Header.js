function Header() {
  return (
    <header className="container flex text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto">
        <img src="/JacksonProfile.png" className="h-32 rounded-full mx-auto mb-5" />
        <h1 className="font-bold text-3xl text-green-300">Jackson Kaufman</h1>
        <p className="text-xs">Check out my music work</p>
        <p className="text-xs">at any one of the links below 🤘🏼</p>
        <p className="pt-3 text-xs">Or take a look at my <a className="text-green-300 hover:text-green-600 duration-200" href="https://jacksonkaufman.com/">web dev site</a> I made 💻</p>
      </div>
    </header>
  );
}

export default Header;
