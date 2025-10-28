import * as SliderPrimitive from "@radix-ui/react-slider";
import "./Slider.css";

export default function Slider({ id, min, max, step, value, onValueChange }) {
    return (
        <SliderPrimitive.Root
            id={id}
            className="SliderRoot"
            min={min}
            max={max}
            step={step}
            value={value}
            onValueChange={onValueChange}>
            <SliderPrimitive.Track className="SliderTrack">
                <SliderPrimitive.Range className="SliderRange" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb
                className="SliderThumb"
                aria-label="Slider"
            />
        </SliderPrimitive.Root>
    );
}
