import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import {
  Input,
  // TextField,
  // RadioGroup,
  // Radio,
  // FormControlLabel,
} from "@material-ui/core";
// import Autocomplete from "@material-ui/lab/Autocomplete";

const ProfileForm = () => {
  const { control, handleSubmit, register } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="location"
        control={control}
        defaultValue=""
        render={({ field }) => <Input {...field} />}
      />
      <select {...register("gender")}>
        <option value="">Select...</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <Controller
        name="neighborhood"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              {
                value: "Charlottenburg-Wilmersdorf",
                label: "Charlottenburg-Wilmersdorf",
              },
              {
                value: "Friedrichshain-Kreuzberg",
                label: "Friedrichshain-Kreuzberg",
              },
              { value: "Lichtenberg", label: "Lichtenberg" },
              { value: "Mitte", label: "Mitte" },
              { value: "Neukölln", label: "Neukölln" },
              { value: "Pankow", label: "Pankow" },
              { value: "Reinickendorf", label: "Reinickendorf" },
              { value: "Spandau", label: "Spandau" },
              { value: "Steglitz-Zehlendorf", label: "Steglitz-Zehlendorf" },
              { value: "Tempelhof-Schöneberg", label: "Tempelhof-Schöneberg" },
              { value: "Treptow-Köpenick", label: "Treptow-Köpenick" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export default ProfileForm;
