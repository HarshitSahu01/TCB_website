import Link from "next/link";

const Button = ({ name }) => {

  return (
    <button className="bg-white text-black text-[0.9rem] font-bold rounded-[4rem] px-[1.6rem] py-[0.7rem] hover:scale-105 transition-all ease-linear duration-100 cursor-pointer shadow-[0px_0px_15px_1px_rgba(255,255,255,0.25)] font-['Montserrat']">
      <Link href="https://www.instagram.com/thecodebreakers/">
        {name}
      </Link>
    </button>
  );
};

export default Button;
