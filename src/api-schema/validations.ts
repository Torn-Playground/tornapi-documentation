import { Param } from "@/api-schema/schema.types";
import { SelectedParamMap } from "@/components/try-it/url-selector/url-utilities";

export type ValidationFunction = (param: Param, value: string | undefined, selectedParams: SelectedParamMap) => ValidationResult;

export type ValidationResult = { valid: true; warning?: string } | { valid: false; reason: string };

export function requiredParam(_: Param, value: string | undefined): ValidationResult {
    if (value) return { valid: true };

    return { valid: false, reason: "This field is required." };
}

export function conditionalRequired(field: string, message: string): ValidationFunction {
    return (_: Param, value: string | undefined, selectedParams: SelectedParamMap): ValidationResult => {
        if (!value && selectedParams[field]) return { valid: false, reason: message };

        return { valid: true };
    };
}

export function isValidTime(): ValidationResult {
    // TODO 2024/01/15 - Validate the time parameters.
    // - Check if it is a number (unix) or string ('readable date').
    // - Check if the other param is required before it will work.
    return { valid: true };
}

export function isNumberList(_: Param, value: string | undefined): ValidationResult {
    if (!value) return { valid: true };

    const values = value.split(",").map((v) => v.toLowerCase());
    if (values.some((v) => isNaN(parseInt(v)))) return { valid: false, reason: "Only numbers are allowed." };

    return { valid: true };
}

export function onlySingleValue(_: Param, value: string | undefined): ValidationResult {
    if (!value) return { valid: true };

    if (value.includes(",")) return { valid: true, warning: "You can only provide a single value in here." };

    return { valid: true };
}

export function withMaximumListLength(max: number): ValidationFunction {
    return (_: Param, value: string | undefined): ValidationResult => {
        if (!value) return { valid: true };
        const values = value.split(",").map((v) => v.toLowerCase());
        if (values.length > 10) return { valid: false, reason: `You can only provide up to ${max} values.` };
        return { valid: true };
    };
}

export function isValidNumber(_: Param, value: string | undefined): ValidationResult {
    if (!value) return { valid: true };
    if (isNaN(parseInt(value))) return { valid: false, reason: "Only numbers are allowed." };

    return { valid: true };
}

export function withMinimumValue(min: number): ValidationFunction {
    return (_: Param, value: string | undefined): ValidationResult => {
        if (!value) return { valid: true };
        if (parseInt(value) < min) return { valid: false, reason: `Must be at least ${min}.` };
        return { valid: true };
    };
}

export function warnMaximumValue(max: number, message: string): ValidationFunction {
    return (_: Param, value: string | undefined): ValidationResult => {
        if (!value) return { valid: true };
        if (parseInt(value) > max) return { valid: true, warning: message };
        return { valid: true };
    };
}

export function hasValidOptions(param: Param, value: string | undefined): ValidationResult {
    if (!value) return { valid: true };
    if (!param.options) throw new Error("Invalid param without options.");

    const hasValue = param.options.values.map((v) => v.toLowerCase()).some((v) => v === value.toLowerCase());

    if (hasValue) return { valid: true };
    else {
        return { valid: false, reason: `Invalid value for '${param.name}'. Valid values are: ${param.options.values.join(", ")}` };
    }
}

function warnSpace(_: Param, value: string | undefined): ValidationResult {
    if (!value) return { valid: true };
    if (value.includes(" ")) return { valid: true, warning: "Spaces are are likely to break things." };
    return { valid: true };
}

export function performValidations(param: Param, value: string | undefined, selectedParams: SelectedParamMap): ValidationResult {
    if (param.validations.length < 1) return { valid: true };

    const validations: ValidationFunction[] = [...param.validations, warnSpace];

    return validations.reduce<ValidationResult>(
        (result, validation) => {
            if (!result.valid) return result;

            return { ...result, ...validation(param, value, selectedParams) };
        },
        { valid: true },
    );
}

export function isValidComment(comment: string): ValidationResult {
    if (!comment) return { valid: true };
    if (comment.length > 10) return { valid: false, reason: "Comment must be 10 characters or less." };
    return { valid: true };
}
