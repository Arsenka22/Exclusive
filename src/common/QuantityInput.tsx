import { useState } from "react";

interface QuantityInputProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
}

export const QuantityInput = ({
  initialValue = 1,
  min = 1,
  max = 99,
  onChange,
}: QuantityInputProps) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleDecrease = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleInputChange = (e: any) => {
    const value = parseInt(e.target.value) || min;
    const clampedValue = Math.min(Math.max(value, min), max);
    setQuantity(clampedValue);
    onChange?.(clampedValue);
  };

  return (
    <div className="quantity-input">
      <button
        type="button"
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="quantity-btn"
      >
        −
      </button>
      <input
        type="number"
        value={quantity}
        min={min}
        max={max}
        onChange={handleInputChange}
        className="quantity-field"
      />
      <button
        type="button"
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="quantity-btn"
      >
        +
      </button>
    </div>
  );
};
