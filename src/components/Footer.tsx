import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-5 pb-2 text-center">
      <p className="font-semibold">
        Made with by{" "}
        <Link
          href="https://www.github.com/nesathanozturk"
          className="text-purple-500 underline"
        >
          Neşathan Öztürk
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
