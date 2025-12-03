'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { useMemo } from 'react'
import countryList from 'react-select-country-list'
import { isWindows } from "@/lib/utils";

export default function CountrySelectItem({ name, label, control, error }: CountrySelectProps) {
    const options = useMemo(() => countryList().getData(), [])

    const getFlagEmoji = (countryCode: string) => {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map((char) => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    };

    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="form-label">Country</Label>
            <Controller name={name} control={control} rules={{ required: 'Please select a country' }}
                render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="select-trigger">
                            <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                            <SelectGroup>
                                {
                                    options.length > 0 && (
                                        options.map((option) => (
                                            <SelectItem  key={option.value} value={option.value}>
                                                <span className="!text-xl !leading-none !align-middle mr-1 font-sans"> 
                                                    {!isWindows() && getFlagEmoji(option.value)} {option.label}
                                                </span>
                                            </SelectItem>
                                        ))
                                    )
                                }
                            </SelectGroup>
                        </SelectContent>
                        {error && (<p className="text-sm text-red-500">{error.message}</p>)}
                    </Select>
                )}
            />
        </div>
    );
}