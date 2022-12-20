import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container md:m-5">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-3">
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">ARIES</div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/aries/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/aries/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">TAURO</div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/tauro/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/tauro/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">GEMINIS</div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/geminis/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/geminis/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">CANCER</div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/cancer/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/cancer/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">LEO</div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/leo/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/leo/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">VIRGO</div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/virgo/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/virgo/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">LIBRA</div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/libra/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/libra/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">
            ESCORPIO
          </div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/escorpio/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/escorpio/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">
            SAGITARIO
          </div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/sagitario/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/sagitario/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">
            CAPRICORNIO
          </div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/capricornio/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/capricornio/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">ACUARIO</div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/acuario/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/acuario/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
        <div className="w-full block grid-cols-3 grid-rows-2 border border-teal-500 p-2 md:p-5 md:m-2">
          <div className="flex justify-center items-center grap-2">PISCIS</div>
          <div className="flex grap-2 justify-around mt-5">
            <Link
              to="/horoscopo/piscis/hoy"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              HOY
            </Link>
            <Link
              to="/horoscopo/piscis/manana"
              className="bg-blue-500 w-1/3 text-white rounded text-center"
            >
              MAÑANA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
