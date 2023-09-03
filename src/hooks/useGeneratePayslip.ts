import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { PaymentProps } from "src/types/dashboardTypes";

const useGeneratePayslip = ({payment}:{payment: PaymentProps}) => {
    const paymentRef = useRef<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const generatePayslip = async() => {
        setIsLoading(true);
        const jsPdf = (await import("jspdf")).default;
        const doc = new jsPdf({
            orientation:"p",
            format: [600, paymentRef?.current?.offsetHeight + 0.1],
            unit: "pt",
            compress: true,
        })
        doc.setFont("Inter-Medium", "normal");
        doc.html(paymentRef?.current, {
            async callback(doc:any){
                await doc.save(`${payment.patient.fname + " " + payment.patient.lname} payslip.pdf`);
                setIsLoading(false);
                toast.success('Download Complete');
            }
        })
    }
    return {isLoading, generatePayslip, paymentRef}
}
export default useGeneratePayslip;