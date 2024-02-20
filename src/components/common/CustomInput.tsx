import { Button, Input, Space } from "antd";
import { FieldAttributes, useField } from "formik";

interface Props {
  // customName: string;
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
  iconAlias?: React.ComponentType<any>;
  iconClassName? : string ;
}

const CustomInput: React.FC<Props> = ({
  // customName,
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
  iconAlias: IconComponent,
  iconClassName ,
  ...rest
}) => {
  // const [field ] = useField(rest.name);
  // console.log(field);

  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        name={rest.name}
        type={type}
        // value={value !== undefined ? value : field.value }
        value={value}
        // onChange={onChange !== undefined ? onChange : field.onChange}
        onChange={onChange}
        onBlur={rest.onBlur}
        placeholder={placeholder}
        allowClear={allowClear}
        className={inputClassName}
        size={size}
        {...rest}
      />
      {/* {
      btn && IconComponent ? (
        <Button
          {...rest}
          className={buttonClassName}
          icon={<IconComponent className="home-icon" />}
        >
          {btnTxt}
        </Button>
      ) : (
        <Button {...rest} className={buttonClassName}>
          {btnTxt}
        </Button>
      )} */}
      {btn && (
        <Button
          {...rest}
          className={buttonClassName}
          icon={IconComponent && <IconComponent className={iconClassName}/>}
        >
          {btnTxt}
        </Button>
      )}
    </Space.Compact>
  );
};

export default CustomInput;
