import { describe, expect, test } from "@jest/globals";
import { FormFieldDef } from "../src/core/form_field_def";
import * as React from "react";

describe("Form Module", () => {
  test("form input def should work", () => {
    const formFieldDef: FormFieldDef = {
      type: "text",
      factory: ({ type, setValue }) => {
        return <input type={type} onChange={setValue} />;
      },
    };

    expect(formFieldDef.type).toBe("text");
  });
});
