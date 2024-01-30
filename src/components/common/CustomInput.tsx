import { Button, Input , Space} from "antd";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: "text" | "password" | "number" | "email" | "search";
  inputClassName?: string;
  buttonClassName?: string;
  allowClear?: boolean;
  size: "large" | "middle" | "small";
  btn?: boolean; 
  btnTxt?: string;
}

const CustomInput = ({
  value,
  onChange,
  placeholder,
  type,
  inputClassName,
  buttonClassName,
  allowClear,
  size,
  btn,
  btnTxt,
  ...rest
}: Props) => {
  return (
    <Space.Compact style={{ width: '100%' }}>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        allowClear={allowClear}
        className={inputClassName}
        size={size}
        {...rest}
      />
      {btn && <Button {...rest} className={buttonClassName}>{btnTxt}</Button>}
    </Space.Compact>
  );
};

export default CustomInput;
