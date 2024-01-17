import TextField from "@mui/material/TextField";

interface NameFilterProps {
  name: string | null;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function NameFilter({ name, setName }: NameFilterProps) {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="search"
        value={name?.toLowerCase().trim()}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
        placeholder="Search by name"
      />
    </div>
  );
}
