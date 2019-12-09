import * as React from "react";
import { Button, ControlLabel, Form, FormControl, FormGroup } from "rsuite";
import { defaultStr } from "../controller/Index";

export const SentenceForm: React.FC = props => {
  const [value, setValue] = React.useState("");
  const onChange = React.useCallback((value: string) => {
    setValue(value);
  }, []);
  const onClick = React.useCallback(() => {
    window.location.href = `/?str=${value}`;
  }, [value]);
  return (
    <Form layout="vertical" fluid>
      <FormGroup>
        <ControlLabel>形態素解析したい文章を入れてください</ControlLabel>
        <FormControl
          name="sentence"
          placeholder={defaultStr}
          value={value}
          onChange={onChange}
        />
      </FormGroup>
      <Button appearance="primary" block onClick={onClick}>
        形態素解析
      </Button>
    </Form>
  );
};
