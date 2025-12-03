'use client'
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
export default function InputItem({name, label, placeholder, register, type='text', rules, error, disabled=false}: FormInputProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="form-label">{label}</Label>
            <Input className={cn('form-input', { 'opacity-50 cursor-not-allowed': disabled })} id={name} type={type} placeholder={placeholder} 
                {...register(name, rules)}/>
            {error && (<p className="text-sm text-red-500">{error.message}</p>)}
        </div>
    );
}