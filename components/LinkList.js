function LinkList(props) {
  return (
    <main className="px-3 pb-6 sm:px-0">
      <h1 className="font-bold text-center pb-3 italic text-3xl">{props.header}</h1>
      <ul className="w-full md:w-4/5 lg:w-3/6 mx-auto">
        <li className="mb-4">
          <a
            className="relative transition duration-200 font-bold bg-green-500 border-green-500 border-2 hover:bg-transparent py-4 w-100 block text-center text-gray-800 hover:text-green-400 rounded-lg md:px-12"
            href={props.featuredUrl}
            alt={props.featuredLink}
            target="_blank"
            rel="noopener"
          >
            <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">{props.emoji}</span>
            <span>{props.featuredLink}</span>
          </a>
        </li>
      </ul>
      <ul className="pb-3 text-center">
        {props.musicLinks.map(link => (
          <li className="mr-3 inline" key={link.icon}>
            <a
              className="text-green-400  hover:text-green-600"
              href={link.url}
              target="_blank"
              rel="noopener"
              alt={link.icon}
            >
              <i className={`fa fa-2x fa-${link.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
      <ul className="pb-6 text-center">
        {props.socialLinks.map(link => (
          <li className="mr-3 inline" key={link.icon}>
            <a
              className="text-green-400  hover:text-green-600"
              href={link.url}
              target="_blank"
              rel="noopener"
              alt={link.icon}
            >
              <i className={`fa fa-2x fa-${link.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default LinkList;
