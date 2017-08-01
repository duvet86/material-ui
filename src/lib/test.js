import CheckboxGroup from "components/formBuilder/formElements/CheckboxGroup";
import DateField from "components/formBuilder/formElements/DateField";
import FileUpload from "components/formBuilder/formElements/FileUpload";
import Header from "components/formBuilder/formElements/Header";
import MultiSelect from "components/formBuilder/formElements/MultiSelect";
import Paragraph from "components/formBuilder/formElements/Paragraph";
import RadioGroup from "components/formBuilder/formElements/RadioGroup";
import Select from "components/formBuilder/formElements/Select";
import TextInput from "components/formBuilder/formElements/TextInput";
import TextArea from "components/formBuilder/formElements/TextArea";

export const formItemMapping = {
  CheckboxGroup,
  DateField,
  FileUpload,
  Header,
  MultiSelect,
  Paragraph,
  RadioGroup,
  Select,
  TextInput,
  TextArea
};

export const components = [
  {
    id: 1,
    name: "Checkbox Group",
    icon: "CheckBoxIcon",
    component: "CheckboxGroup"
  },
  {
    id: 2,
    name: "Date Field",
    icon: "CalendarIcon",
    component: "DateField"
  },
  {
    id: 3,
    name: "File Upload",
    icon: "FileUploadIcon",
    component: "FileUpload"
  },
  {
    id: 4,
    name: "Header",
    icon: "TitleIcon",
    component: "Header"
  },
  {
    id: 5,
    name: "Multi Select",
    icon: "MultiSelectIcon",
    component: "MultiSelect"
  },
  {
    id: 6,
    name: "Paragraph",
    icon: "ParagraphIcon",
    component: "Paragraph"
  },
  {
    id: 7,
    name: "Radio Group",
    icon: "RadioIcon",
    component: "RadioGroup"
  },
  {
    id: 8,
    name: "Select",
    icon: "SelectIcon",
    component: "Select"
  },
  {
    id: 9,
    name: "Text Input",
    icon: "InputTextIcon",
    component: "TextInput"
  },
  {
    id: 10,
    name: "Text Area",
    icon: "TextAreaIcon",
    component: "TextArea"
  }
];
