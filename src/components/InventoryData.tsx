import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FormInput from "./FormInput";
import { addUpdateInventory } from "@/actions/user";
import { toast } from "./ui/use-toast";

type Props = {
  title: string;
  data: any;
};

const InventoryData = ({ title, data }: Props) => {
  const handleSubmit = async (formData: FormData) => {
    const response: any = await addUpdateInventory(formData, data);
    if (response?.error) {
      toast({ title: response?.error });
    } else {
      toast({ title: "Inventory item created/updated successfully" });
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">{title}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            Add or update inventory item details here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col h-full">
          <div className="flex-grow overflow-y-auto">
            <form action={handleSubmit} className="space-y-6 py-6">
              <FormInput
                type="text"
                name="partNumber"
                label="Part Number"
                placeholder="Enter the part number"
                defaultValue={data?.partNumber}
              />
              <FormInput
                type="text"
                name="referenceNumber"
                label="Reference Number"
                placeholder="Enter the reference number"
                defaultValue={data?.referenceNumber}
              />
              <FormInput
                type="text"
                name="manufacturer"
                label="Manufacturer"
                placeholder="Enter the manufacturer"
                defaultValue={data?.manufacturer}
              />
              <FormInput
                type="number"
                name="qty"
                label="Quantity"
                placeholder="Enter the quantity"
                defaultValue={data?.qty}
              />
              <FormInput
                type="text"
                name="description"
                label="Description"
                placeholder="Enter the description"
                defaultValue={data?.description}
              />
              <FormInput
                type="text"
                name="availability"
                label="Availability"
                placeholder="Enter the availability status"
                defaultValue={data?.availability}
              />
              <Button type="submit" className="w-full">
                {title}
              </Button>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default InventoryData;