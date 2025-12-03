'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@radix-ui/react-label"
import { Controller } from "react-hook-form"
export function SelectionList({ name, label, placeholder, options, control, error }: SelectFieldProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="form-label">
                {label}
            </Label>
            <Controller name={name}
                control={control}
                rules={{
                    required: `Please select ${label.toLowerCase()}`
                }}
                render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="select-trigger">
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                            <SelectGroup>
                                {
                                    options.length > 0 && (
                                        options.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))
                                    )
                                }
                            </SelectGroup>
                        </SelectContent>
                        {error && (<p className="text-sm text-red-500">{error.message}</p>)}
                    </Select>
                )}>
            </Controller>
        </div>

    )
}
