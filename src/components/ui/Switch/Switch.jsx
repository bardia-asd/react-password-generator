import * as SwitchPrimitive from "@radix-ui/react-switch";
import './Switch.css'

export default function Switch({ id, checked, onCheckedChange, label }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
            <label className="Label" htmlFor={id} style={{ paddingRight: 15 }}>
                {label}
            </label>

            <SwitchPrimitive.Root
                className="SwitchRoot"
                id={id}
                checked={checked}
                onCheckedChange={onCheckedChange}>
                <SwitchPrimitive.Thumb className="SwitchThumb" />
            </SwitchPrimitive.Root>
        </div>
    );
}
