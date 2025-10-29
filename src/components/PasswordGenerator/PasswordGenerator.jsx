import { useState, useEffect, useId } from "react";
import { Lock, RefreshCw, Copy, Check } from "lucide-react";
import "./PasswordGenerator.css";
import Card from "../ui/Card/Card";
import Switch from "../ui/Switch/Switch";
import Slider from "../ui/Slider/Slider";

export default function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [copied, setCopied] = useState(false);
    const [options, setOptions] = useState({
        length: [14],
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
    });

    const id = useId();

    const switchOptions = [
        { key: "uppercase", label: "Uppercase (A-Z)" },
        { key: "lowercase", label: "Lowercase (a-z)" },
        { key: "numbers", label: "Numbers (0-9)" },
        { key: "symbols", label: "Symbols (!@#$...)" },
    ];

    const generatePassword = (opts = options) => {
        const charsByType = {
            uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            lowercase: "abcdefghijklmnopqrstuvwxyz",
            numbers: "0123456789",
            symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
        };

        let chars = "";
        Object.keys(charsByType).forEach((key) => {
            if (opts[key]) chars += charsByType[key];
        });

        if (!chars) return "";

        let password = "";
        for (let i = 0; i < opts.length; i++) {
            password += chars[Math.floor(Math.random() * chars.length)];
        }

        setPassword(password);
    };

    useEffect(() => {
        generatePassword(options);
    }, []);

    const copyToClipboard = async () => {
        if (!password) return;

        try {
            await navigator.clipboard.writeText(password);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy password");
        }
    };

    const handleOptionsChanges = (key, value) => {
        const newOptions = { ...options, [key]: value };
        setOptions(newOptions);
        generatePassword(newOptions);
    };

    const getPasswordStrength = () => {
        let strength = 0;
        if (options.uppercase) strength++;
        if (options.lowercase) strength++;
        if (options.numbers) strength++;
        if (options.symbols) strength++;
        if (options.length >= 12) strength++;
        if (options.length >= 16) strength++;

        if (strength <= 2) return "Weak";
        if (strength <= 4) return "Medium";
        return "Strong";
    };

    const strength = getPasswordStrength();

    return (
        <Card className="space-y-6">
            <div className="password-generator-header">
                <div className="header-icon">
                    <Lock size={30} />
                </div>
                <h1 className="header-title">Password Generator</h1>
                <p className="header-subtitle">
                    Create secure passwords instantly
                </p>
            </div>

            <div className="password-display">
                <div className="password-text">
                    <p>{password}</p>
                </div>
                <div className="password-actions">
                    <button className="copy-btn" onClick={copyToClipboard}>
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                    <button
                        className="regenerate-btn"
                        onClick={() => generatePassword(options)}>
                        <RefreshCw size={18} />
                    </button>
                </div>
            </div>

            <div className="password-strength">
                <span className="strength-label">Strength</span>
                <div className="strength-bar">
                    <div className="strength-levels">
                        {[...Array(3)].map((_, i) => (
                            <span
                                key={i}
                                className={`strength-level ${
                                    i === 0 && strength === "Weak"
                                        ? "weak"
                                        : i <= 1 && strength === "Medium"
                                        ? "medium"
                                        : strength === "Strong"
                                        ? "strong"
                                        : ""
                                }`}></span>
                        ))}
                    </div>
                    <span className="strength-text">{strength}</span>
                </div>
            </div>

            <div className="slider-container">
                <div className="slider-header">
                    <span className="slider-label">Length</span>
                    <span className="slider-value">{options.length}</span>
                </div>

                <Slider
                    min={8}
                    max={30}
                    step={1}
                    value={options.length}
                    onValueChange={(value) =>
                        handleOptionsChanges("length", value)
                    }
                />
            </div>

            <div className="switch-group">
                {switchOptions.map(({ key, label }) => (
                    <Switch
                        key={key}
                        label={label}
                        id={`${id}-${key}`}
                        checked={options[key]}
                        onCheckedChange={(checked) =>
                            handleOptionsChanges(key, checked)
                        }
                    />
                ))}
            </div>

            <button
                className="generate-password-btn"
                onClick={() => generatePassword(options)}>
                <RefreshCw size={18} />
                Generate Password
            </button>
        </Card>
    );
}
