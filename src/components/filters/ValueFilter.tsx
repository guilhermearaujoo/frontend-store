import Slider from "@mui/material/Slider";

interface ValueFilterProps {
  values: number[] | null;
  setValues: React.Dispatch<React.SetStateAction<number[] | null>>;
  min?: number;
  max?: number;
}

function valuetext(value: number) {
  return `R$ ${value}`;
}

const minDistance = 10;

export default function ValueFilter({
  values,
  setValues,
  min = 0,
  max = 100,
}: ValueFilterProps) {
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValues([Math.min(newValue[0], values[1] - minDistance), values[1]]);
    } else {
      setValues([values[0], Math.max(newValue[1], values[0] + minDistance)]);
    }
  };

  return (
    <div>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={values}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        min={min}
        max={max}
      />
    </div>
  );
}
