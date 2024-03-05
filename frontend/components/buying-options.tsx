"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qNLSalKcLtD
 */
import { buyNow } from "@/actions/form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import { FormMessage } from "./form";
import { SubmitButton } from "./submit-button";

enum UserType {
  SingleUser = "singleuser",
  MultiUser = "multiuser",
  EnterpriseUser = "enterpriseuser",
}

enum UserTypeLabel {
  SingleUser = "Single User",
  MultiUser = "Multi User",
  EnterpriseUser = "Enterprise User",
}

enum ButtonValue {
  Sample = "sample",
  Discount = "discount",
  Enquiry = "enquiry",
  BulkReport = "bulk-report",
}

enum ButtonLabel {
  RequestSample = "Request Sample",
  RequestDiscount = "Request Discount",
  PreOrderEnquiry = "Pre Order Enquiry",
  RequestBulkReport = "Request Bulk Report",
}

interface BuyingOptionsProps {
  reportId: string;
  prices: { price: string; userType: keyof typeof UserType }[];
}

interface ButtonData {
  label: ButtonLabel;
  value: ButtonValue;
}

const buttons: ButtonData[] = [
  { label: ButtonLabel.RequestSample, value: ButtonValue.Sample },
  { label: ButtonLabel.RequestDiscount, value: ButtonValue.Discount },
  { label: ButtonLabel.PreOrderEnquiry, value: ButtonValue.Enquiry },
  { label: ButtonLabel.RequestBulkReport, value: ButtonValue.BulkReport },
];

export function BuyingOptions(props: BuyingOptionsProps) {
  const [state, action] = useFormState(buyNow, { user: null, error: null });
  if (state.user) {
    redirect(`/checkout?id=${props.reportId}&user=${state.user}`);
  }
  const handleButtonClick = (value: ButtonValue) => {
    console.log({ value });
    redirect(`/request?id=${props.reportId}&value=${value}`);
  };
  return (
    <div className="flex flex-col space-y-6  py-8 md:py-12 lg:py-24 ">
      <div className="border">
        <div className="bg-gray-200 p-4 text-center text-xl font-semibold">
          Buying Options
        </div>
        <form className="space-y-4 px-6 py-4" action={action}>
          <RadioGroup defaultValue={UserType.SingleUser} required name="user">
            {props.prices.map((item) => (
              <div
                className="flex items-center space-x-2"
                key={UserType[item.userType]}
              >
                <RadioGroupItem
                  id={UserType[item.userType]}
                  value={UserType[item.userType]}
                />
                <Label htmlFor={UserType[item.userType]}>
                  {UserTypeLabel[item.userType]} ${item.price}
                </Label>
              </div>
            ))}
          </RadioGroup>
          <SubmitButton textContent="Buy Now" />
          <FormMessage>{state.error}</FormMessage>
        </form>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 px-6">
        {buttons.map((button) => (
          <Button
            key={button.value}
            className="text-white uppercase"
            onClick={() => handleButtonClick(button.value)}
            type="button"
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
