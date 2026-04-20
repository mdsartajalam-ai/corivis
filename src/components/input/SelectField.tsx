
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";

type Option = {
  label: string;
};

type Props = {
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  options: Option[];
  placeholder?: string;
};

const SelectField = ({
  name,
  value,
  onChange,
  options,
  placeholder = "Select Option",
}: Props) => {
  const handleChange = (e: SelectChangeEvent) => {
    onChange(e.target.value as string, name);
  };

  return (
    <Select
      name={name}
      value={value}
      onChange={handleChange}
      fullWidth
      size="small"
      displayEmpty
      className="app-select"
      MenuProps={{
        slotProps: {
          paper: {
            className: "app-select-dropdown",
          },
        },
      }}
    >
      <MenuItem value="" disabled>
        {placeholder}
      </MenuItem>

      {options.map((opt) => (
        <MenuItem key={opt.label} value={opt.label}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectField;