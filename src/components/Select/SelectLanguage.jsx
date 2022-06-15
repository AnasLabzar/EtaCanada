import React, { useState, useEffect } from "react";
import Country from "../countryList/Country";
import Button from "@mui/material/Button";
import {CountryLists} from "../../assets/Json/CountryList";

const SelectLanguage = () => {

  return (
    <>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Pick the best fantasy franchise</span>
          <span class="label-text-alt">Alt label</span>
        </label>
        <select class="select select-bordered">
          <option disabled  selected>Your Nationality :</option>
          {CountryLists.map(( data, key ) => (
            <option key={key}>
              {data.name},
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default SelectLanguage;
