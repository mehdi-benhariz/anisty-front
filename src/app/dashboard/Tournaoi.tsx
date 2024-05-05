import * as React from "react";
import Image from "next/image";
interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      className="shrink-0 w-11 aspect-[1.25]"
      width={333}
    />
  );
};

interface RoundedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const RoundedImage: React.FC<RoundedImageProps> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      className={`shrink-0 max-w-full rounded-3xl ${className}`}
      width={333}
    />
  );
};

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className = "" }) => {
  return (
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      className={`aspect-square ${className}`}
      width={333}
    />
  );
};

const Tournoi: React.FC = () => {
  const roundedImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fba55aeb1f83e2ebce3ee9d3534a8c137bf1b4bd557a90d6e9e632cb615be903?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&",
      alt: "Rounded image 1",
      className: "aspect-[1.43] w-[105px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7eb9c631cd061568fe8fbe4bf289f85605c0b01d466b4f9df8234eb242c38448?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&",
      alt: "Rounded image 2",
      className: "aspect-[1.43] w-[106px]",
    },
  ];

  return (
    <div className="flex flex-col items-center max-w-[375px]">
      <div className="flex gap-1.5 self-start ml-5 text-base tracking-normal leading-5 text-white">
        <Avatar
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa95ee0ee221b96cba47e127d398105b763259dbdae51b66fd6ea836369e4463?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
          alt="Louay Romdhane avatar"
        />
        <div className="flex-auto my-auto">Louay Romdhane</div>
      </div>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d615da4a07a43519f1a099b4fc1ce8836e36ecb0ac30599c53d2a4b19c066623?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
        alt="Main image"
        className="self-stretch mt-8 w-full rounded-3xl aspect-[2.04]"
        width={333}
      />
      <div className="flex flex-col items-end px-16 pt-1.5 pb-3 mt-3.5 max-w-full rounded-3xl bg-indigo-500 bg-opacity-10 w-[273px]">
        <Icon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b7cec7435595ff7f2504d0cf320f5faf99e18c22faf928c17966c3801f84856?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
          alt="Icon"
          className="w-[21px]"
        />
      </div>
      <div className="flex gap-1.5 px-5 mt-5 text-xs font-medium text-center text-violet-500 whitespace-nowrap">
        {roundedImages.map((image, index) => (
          <RoundedImage
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
        <div className="flex flex-col flex-1 px-8 pt-2 pb-5 bg-white rounded-3xl">
          <Icon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9075fc72287721d5e3e81fc0f13f2b02eda5c4a65b450887c61cf6fd014c5d?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
            alt="DocBot icon"
            className="w-[30px]"
          />
          <div className="mt-2">DocBot</div>
        </div>
      </div>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dd72afd0296b44dd6a00b112d1eedc52aae693a33287d90493a6c8d7d83d92e?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
        alt="Bottom image"
        className="mt-5 w-full aspect-[2.7] max-w-[333px]"
        width={333}
      />
      <section className="flex flex-col justify-center px-px mt-2 w-full text-white bg-purple-900 rounded max-w-[333px]">
        <div className="flex overflow-hidden relative flex-col gap-3.5 px-2 py-2.5 aspect-[2.67]">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/35bffff8a766e3a4787eebe76d3706249a04c4d4c9a511bd1be137554f14a652?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
            alt="Background"
            className="object-cover absolute inset-0 size-full"
            width={333}
          />
          <div className="flex relative flex-col my-auto">
            <h2 className="text-xl font-bold">
              Cours d &apos aujourd &apos hui
            </h2>
            <p className="mt-2 text-sm font-medium">User Experience Class</p>
            <button className="justify-center px-2 py-1 mt-2 text-xs font-semibold rounded bg-purple-400 bg-opacity-80">
              View now
            </button>
          </div>
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da03677047c1e05f7cec514aa66762c2abe2d6343a07d9e2b294740317d69b5d?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
            alt="Course image"
            className="shrink-0 max-w-full aspect-square w-[102px]"
            width={333}
          />
        </div>
      </section>
    </div>
  );
};

export default Tournoi;
