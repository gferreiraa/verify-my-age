export type InputProps = {
  label: string;
  placeholder: string;
  type: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;
