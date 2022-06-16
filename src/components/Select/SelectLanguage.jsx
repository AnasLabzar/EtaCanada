import React, { useState, useEffect } from "react";
import Country from "../countryList/Country";
import Button from "@mui/material/Button";
import {CountryLists} from "../../assets/Json/CountryList";

const SelectLanguage = () => {

  return (
    <>
      <div class="form-control w-full max-w-full ">
        <select class="select !rounded-sm select-bordered mt-4 bg-gray-300 text-gray-800">
          <option disabled  selected className="!text-black">Your Nationality :</option>
          {CountryLists.map(( data, key ) => (
            <option key={key} className="!text-black !rounded-sm font-medium opacity-70">
              {data.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default SelectLanguage;
