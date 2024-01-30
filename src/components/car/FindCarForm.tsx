import { LuArrowUpDown } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { Radio, Select, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { DatePickerProps } from "antd";
import type { Dayjs } from "dayjs";

dayjs.extend(customParseFormat);

const FindCarForm = () => {
  const dateOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const timeOnChange = (time: Dayjs | null, timeString: string) => {
    console.log(time, timeString);
  };
  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  const cityOnChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
      <div className="find__car">
        <div className="info first">
          <Radio className="pick__up">Pick - Up</Radio>
          <div className="info__select">
            <div className="location">
              <label htmlFor="citySelector">Locations</label>
              <Select
                id="citySelector"
                showSearch
                placeholder="Select city"
                // defaultValue="Select a city"
                optionFilterProp="children"
                style={{ width: 120 }}
                bordered={false}
                filterOption={filterOption}
                onChange={cityOnChange}
                onSearch={onSearch}
                options={[
                  { value: "casablanca", label: "Casablanca" },
                  { value: "settat", label: "Settat" },
                  { value: "tanger", label: "Tanger" },
                  { value: "agadir", label: "Agadir" },
                ]}
                suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                className="city__selector"
              />
            </div>
            <div className="date">
              <label htmlFor="">Date</label>
              <DatePicker
                onChange={dateOnChange}
                bordered={false}
                suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                className="date__picker"
              />
            </div>
            <div className="time">
              <label htmlFor="">Time</label>
              <TimePicker
                onChange={timeOnChange}
                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                bordered={false}
                className="time__picker"
              />
            </div>
          </div>
        </div>
        <button className="cars__filter__btn">
          <LuArrowUpDown />
        </button>
        <div className="info second">
          <Radio className="drop__off">Drop - Off</Radio>
          <div className="info__select">
            <div className="location">
              <label htmlFor="">Locations</label>
              <Select
                showSearch
                placeholder="Select city"
                // defaultValue="Select a city"
                optionFilterProp="children"
                style={{ width: 120 }}
                bordered={false}
                filterOption={filterOption}
                onChange={cityOnChange}
                onSearch={onSearch}
                options={[
                  { value: "casablanca", label: "Casablanca" },
                  { value: "settat", label: "Settat" },
                  { value: "tanger", label: "Tanger" },
                  { value: "agadir", label: "Agadir" },
                ]}
                suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                className="city__selector"
              />
            </div>
            <div className="date">
              <label htmlFor="">Date</label>
              <DatePicker
                onChange={dateOnChange}
                bordered={false}
                suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                className="date__picker"
              />
            </div>
            <div className="time">
              <label htmlFor="">Time</label>
              <TimePicker
                onChange={timeOnChange}
                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                suffixIcon={<IoIosArrowDown className="arrow__icon" />}
                bordered={false}
                className="time__picker"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default FindCarForm;
