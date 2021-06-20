import Image from "next/image";

import cnn from "../public/cnn.png";
import forbes from "../public/forbes.png";
import google from "../public/google.png";
import illustration from "../public/illustration.png";
import tirto from "../public/tirto.png";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-between my-20 lg:px-64">
        <div className="w-1/2">
          <h1 className="font-serif text-6xl">
            The easiest way to manage college schedules
          </h1>
          <div className="mt-5 ">
            <p className="text-sm font-light text-gray-500">
              Datang kuliah terlambat karena ketiduran itu tidak masalah;
            </p>
            <p className="text-sm font-light text-gray-500">
              Datang kuliah karena lupa jadwal itu sangat tidak keren.
            </p>
          </div>
          <div className="flex items-center my-5 -mx-5">
            <button className="px-10 py-3 mx-5 text-white rounded-lg bg-red-500 hover:bg-red-600">
              Get Started
            </button>
            <a href="#" className="flex mx-5 my-auto">
              <div className="w-5 h-5 my-auto mr-3">
                <svg
                  width="100"
                  height="100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.703 10.123a2 2 0 01-.076 3.341l-9.565 5.98c-1.332.834-3.06-.124-3.06-1.695V5.165c0-1.612 1.81-2.562 3.136-1.646l9.565 6.604z"
                    fill="#FE5E44"
                  />
                </svg>
              </div>
              <h5 className="text-red-500">Play Preview</h5>
            </a>
          </div>
          <div className="mt-20">
            <h5 className="text-sm text-gray-400 uppercase">Featured On</h5>
            <div className="flex my-5 -mx-2">
              <div className="w-auto h-5 mx-2 my-auto">
                <Image src={cnn} alt="plongo cnn" />
              </div>

              <div className="w-auto h-5 mx-2 my-auto">
                <Image src={tirto} alt="plongo tirto" />
              </div>

              <div className="w-auto h-5 mx-2 my-auto">
                <Image src={forbes} alt="plongo forbes" />
              </div>

              <div className="w-auto h-5 mx-2 my-auto">
                <Image src={google} alt="plongo google" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={illustration} alt="plongo cnn" />
        </div>
      </main>
    </>
  );
}
