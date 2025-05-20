import React, { useState } from "react";
import { FC } from "react";
import { Button, Form } from "react-bootstrap";

export const Calculator: FC = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const sum = () => {
    setResult(a + b);
  };

  const decrement = () => {
    setResult(a - b);
  };

  const multiply = () => {
    setResult(a * b);
  };

  const divide = () => {
    setResult(a / b);
  };

  return (
    <div>
      <h1>Calculator</h1>

      <div className="number-inputs">
        <Form.Control
          type="number"
          id="a"
          aria-describedby="a-value"
          placeholder="0"
          value={a}
          onChange={(e) => {
            setA(Number(e.target.value));
          }}
        />

        <Form.Control
          type="number"
          id="b"
          aria-describedby="b-value"
          placeholder="0"
          value={b}
          onChange={(e) => {
            setB(Number(e.target.value));
          }}
        />
      </div>

      <ButtonComponent color={"primary"} name="Sumar +" callback={sum} />
      <ButtonComponent color={"danger"} name="Restar -" callback={decrement} />
      <ButtonComponent
        color={"info"}
        name="Multiplicar *"
        callback={multiply}
      />
      <ButtonComponent color={"secondary"} name="Dividir /" callback={divide} />

      <h2>{result}</h2>
    </div>
  );
};

const ButtonComponent: FC<ButtonProps> = (props: ButtonProps) => {
  const { name, callback, color } = props;
  return (
    <Button
      variant={color}
      onClick={() => {
        callback();
      }}
    >
      {name}
    </Button>
  );
};

type ButtonProps = {
  name: string;
  callback: () => void;
  color?: string;
};
