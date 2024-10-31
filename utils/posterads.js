import React from "react";
import Image from "next/image";
import Link from "next/link";
const ad1 = require( "../public/ads2.jpg")
const ad2 = require( "../public/adposterTelesmuts.jpg")
const ad3 = require( "../public/adposter3.png")
const ad4 = require( "../public/adsposter4.png")

import AdsterraAd from "@/components/AdsterraAd";
export function Poster1() {
  return (
    <div>
      <Link
        className="px-4 py-2 text-white rounded-md"
        href="https://www.profitablecpmrate.com/xzzdaxbw?key=23bb7e04da8367a3798df8a3bf09e239"
      >
        <Image
          src={ad1}
          alt="Blog Cover"
          width={100}
          height={100}
          className="h-48 w-56"
        />
      </Link>
      <AdsterraAd />
    </div>
  );
}

export function Poster2() {
  return (
    <Link
      className="px-4 py-2 text-white rounded-md"
      href="https://www.profitablecpmrate.com/xzzdaxbw?key=23bb7e04da8367a3798df8a3bf09e239"
    >
      <Image
        src={ad2}
        alt="Blog Cover"
        width={100}
        height={100}
        className="h-48 w-56"
      />
    </Link>
  );
}

export function Poster3() {
  return (
    <Link
      className="px-4 py-2 text-white rounded-md"
      href="https://www.profitablecpmrate.com/xzzdaxbw?key=23bb7e04da8367a3798df8a3bf09e239"
    >
      <Image
        src={ad3}
        alt="Blog Cover"
        width={100}
        height={100}
        className="h-48 w-56"
      />
    </Link>
  );
}

export function Poster4() {
  return (
    <Link
      className="px-4 py-2 text-white rounded-md"
      href="https://www.profitablecpmrate.com/xzzdaxbw?key=23bb7e04da8367a3798df8a3bf09e239"
    >
      <Image
        src={ad4}
        alt="Blog Cover"
        width={100}
        height={100}
        className="h-48 w-56"
      />
    </Link>
  );
}
