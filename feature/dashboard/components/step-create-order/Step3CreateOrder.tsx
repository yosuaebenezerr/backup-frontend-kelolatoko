"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { controlAddOrder } from "@/schema/validation-add-order";
import { Controller } from "react-hook-form";

export function Step3CreateOrder({ control }: { control: controlAddOrder }) {
  const { control: formControl } = control;

  return (
    <>
      <Controller
        control={formControl}
        name="paymentMethod"
        render={({ field }) => (
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2 border p-3 rounded-lg flex-1 cursor-pointer">
              <RadioGroupItem value="CASH" id="cash" />
              <Label htmlFor="cash" className="cursor-pointer">
                💵 Tunai (Cash)
              </Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-lg flex-1 cursor-pointer">
              <RadioGroupItem value="MIDTRANS" id="midtrans" />
              <Label htmlFor="midtrans" className="cursor-pointer">
                (QRIS / Transfer)
              </Label>
            </div>
          </RadioGroup>
        )}
      />
    </>
  );
}
