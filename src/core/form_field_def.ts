// --------------------------- All ---------------------------
export interface StateBase {
  value: string;
  setValue: (e: React.ChangeEvent) => void;
}

// --------------------------- Text ---------------------------
export type FormTextType = "header" | "subheader" | "paragraph";
export interface FormTextProps {
  type: FormTextType;
  text: string;
}
export interface FormTextItem {
  factory?: (props: FormTextProps) => JSX.Element;
}

export type FormTextDef = FormTextProps & FormTextItem;

// --------------------------- Input ---------------------------

export type FormInputType = React.HTMLInputTypeAttribute;
export interface FormInputProps {
  type: FormInputType;
  label?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
}

export interface FormInputItem {
  factory?: (props: FormInputProps & StateBase) => JSX.Element;
}
export type FormInputDef = FormInputProps & FormInputItem;

// --------------------------- TextArea ---------------------------
export type FormTextAreaType = "textarea";

export interface FormTextAreaProps {
  type: FormTextAreaType;
  label?: string;
}

export interface FormTextAreaItem {
  factory?: (props: FormTextAreaProps & StateBase) => JSX.Element;
}

export type FormTextAreaDef = FormTextAreaProps & FormTextAreaItem;

// --------------------------- Form Field ---------------------------

export type FormFieldDef = FormInputDef | FormTextDef | FormTextAreaDef;
