import { FormFieldDef } from "./form_field_def";

export interface InitialFormState {}

export interface FormState {}

export interface CoreOptions {
  fields: FormFieldDef[];
  debug?: boolean;
  initialState?: InitialFormState;
  onStateChange?: (state: FormState) => void;
  state: Partial<FormState>;
}

export interface CoreInstance {
  state: FormState;
  setState: (state: FormState) => void;
}

export interface Form extends CoreInstance {}

export function createForm(options: CoreOptions): Form {
  return {
    state: {},
    setState: (state: FormState) => {
      if (options.onStateChange) {
        options.onStateChange(state);
      }
    },
  };
}
