import Image from 'next/image';

import { useRouter } from 'next/router';

export default function Error() {
  const router = useRouter();

  const onClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-xl font-bold text-black">Are you lost young one?</h3>
      <div className="w-full h-full">
        <Image
          src="/img/not-found.svg"
          alt="404: Not Found"
          layout="responsive"
          height={1}
          width={1}
        />
      </div>
      <p className="px-4 mb-16 -mt-8 text-base text-center text-black md:text-lg md:px-0">
        Looks like we sent you the wrong way.
        <br />
        Let us guide you back to <a onClick={onClick}> Back!</a>
      </p>
    </div>
  );
}
