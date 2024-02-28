import Image from "next/image";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  const handleOnClickLogo = () => {
    router.push("/");
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-black p-0.5 shadow-md dark:bg-gray-900 dark:focus:ring-gray-600">
      <nav className="relative mx-14 mt-[2px] flex h-[65px] items-center justify-between lg:h-[60px]">
        <Image
          className="cursor-pointer"
          onClick={handleOnClickLogo}
          src="/svg/codewalnut_logo.svg"
          alt="cw-logo"
          width={100}
          height={100}
        />
      </nav>
    </header>
  );
}
