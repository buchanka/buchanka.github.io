function Link({url, text}) {
  return (
    <a className="text-darkgrey" href={url}>{text}</a>
  );
}

export default Link;